import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const adminGaurd: CanActivateFn=(route,state)=>{
    const authService=inject(AuthService)
    const router = inject(Router)
    if(authService.isLoggedIn){
        if (authService.isAdmin) {
            return true
        }
        else{
            router.navigateByUrl("/login")
            return false
        }
    }else{
        router.navigateByUrl("/login")
        return false
    }
}