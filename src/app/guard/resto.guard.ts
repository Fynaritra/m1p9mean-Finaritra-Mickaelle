import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { profilresto, profiladmin } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestoGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem("profil")==profiladmin || localStorage.getItem("profil")==profilresto){
      return true;
    }
    return false;
  }
}
