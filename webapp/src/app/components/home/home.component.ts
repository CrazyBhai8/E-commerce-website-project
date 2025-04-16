import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4  
      }
    },
    nav: true
  }
  
  customerService=inject(CustomerService)
  newProducts:Product[]=[]
  featuredProducts:Product[]=[]
  bannerImages:Product[]=[]
  ngOnInit(){
    this.customerService.getFeaturedProducts().subscribe(result=>{
      this.featuredProducts = result
      console.log(this.featuredProducts)
      this.bannerImages.push(...result)
    })
    this.customerService.getNewProducts().subscribe(result=>{
      this.newProducts = result
      console.log(this.newProducts)
      this.bannerImages.push(...result)
    })
  }
}
