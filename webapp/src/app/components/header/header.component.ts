import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  customerService = inject(CustomerService)
  categoryList:Category[]=[]
  authService = inject(AuthService)

  ngOnInit(){
    this.customerService.getCategories().subscribe(result=>{
      this.categoryList =result
    })
  }
    router=inject(Router)
    onSearch(e:any){
      if(e.target.value){
        this.router.navigateByUrl('/products?search='+e.target.value)
      }
      console.log()
    }
    searchCategory(id:String){
      this.router.navigateByUrl('/products?search='+id)
    }
    logout(){
      this.authService.logout()
      this.router.navigateByUrl("/login")
    }
}
