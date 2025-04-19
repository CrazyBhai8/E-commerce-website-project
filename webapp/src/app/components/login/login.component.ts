import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formBuilder = inject(FormBuilder)
  loginForm= this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]],
  })
  authService=inject(AuthService)
  router=inject(Router)
  login(event: Event){
    event.preventDefault();
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value.email!,this.loginForm.value.password!).subscribe((result:any)=>{
      console.log(result)
      localStorage.setItem('token',result.token)
      localStorage.setItem('user',JSON.stringify(result.user))
      this.router.navigateByUrl("/")
    })
  }
}
