import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand-form',
  imports: [FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './brand-form.component.html',
  styleUrl: './brand-form.component.css'
})
export class BrandFormComponent {
  name!:String;
  brandService = inject(BrandService)
  router=inject(Router)
  route= inject(ActivatedRoute)
  isEdit = false
  id!:string

ngOnInit(){
  this.id =this.route.snapshot.params["id"]
  if (this.id) {
    this.isEdit = true
    this.brandService.getBrandById(this.id).subscribe((result:any)=>{
      console.log(result)
      this.name=result.name
    })
  }
}

  add(){
    console.log(this.name)
    this.brandService.addBrand(this.name).subscribe((result:any)=>{
      alert("Brand added")
      this.router.navigateByUrl("/admin/brands")
    })
  }
  update(){
    console.log(this.name)
    this.brandService.updateBrand(this.id,this.name).subscribe((result:any)=>{
      alert("Brand updated")
      this.router.navigateByUrl("/admin/brands")
    })
  }
}
