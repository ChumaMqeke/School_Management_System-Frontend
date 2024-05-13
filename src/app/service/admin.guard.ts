import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthService } from '../admin/service/admin-auth.service';
import { Router } from '@angular/router';

// export const adminGuard: CanActivateFn = (route, state) => {
 export class AdminGuard implements CanActivate {

 constructor(private adminService : AdminAuthService, private router : Router) {} 

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean{

    if( this.adminService.isAdminLoggedIn() === true ) {
      return true;
    }
    else {

      this.router.navigate(['/admin/login']);
      return false;
    }
  }


};
