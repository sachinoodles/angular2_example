import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot  } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {

let name = route.data.name;

console.log(name,'aaaaaaa')

if(name == "student"){
console.log('authguard')
}
        
 
return true;

    }


}
