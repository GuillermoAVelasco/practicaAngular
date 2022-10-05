import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'pr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  list: User[] = [];
  errorSession: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit(): void {
  }

  login() {
    this.list = this.userService.getUsers();

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    let user = new User(email, password);

    this.userService.login(user).subscribe({
      next: (data) => {
        if (data[0] != undefined) {
          const currentUser = {
            email: data[0].email,
            valida: true
          }
          localStorage.setItem('currentUser', JSON.stringify(currentUser));

          this.router.navigate(['list']);          
        } 
        else {
          this.errorSession = true;
          setTimeout(() => {
            this.errorSession = false;
          }, 3000);

        }

      },
      error: (responseFail) => {
        console.log('Ocurrio error con tu email o password');

        this.errorSession = true;
        setTimeout(() => {
          this.errorSession = false;
        }, 3000);
      }
    });



  }
}
