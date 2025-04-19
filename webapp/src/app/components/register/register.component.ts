import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
formBuilder = inject(FormBuilder)
registerForm = this.formBuilder.group({
  name:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.minLength(5)]]
})
authService=inject(AuthService)
router = inject(Router)
register(){
  let value =this.registerForm.value
  this.authService.register(value.name!,value.email!,value.password!).subscribe(result=>{
    alert("User registered")
    this.router.navigateByUrl("/login")
  })
}
}
