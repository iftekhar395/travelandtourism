import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';

@Injectable()
export class StoreFirstGuard{
    private firstNavigation  = true;
    constructor(private router : Router){}
    canActivate(route : ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean{
            if(this.firstNavigation){
                this.firstNavigation = false;
                if(route.component != HomepageComponent){
                    this.router.navigateByUrl("/");
                    return false;
                } 
            }
            return true;
        }
}