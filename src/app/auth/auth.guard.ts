// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.cookieService.check('token'); // Verifica se o cookie existe

    if (route.routeConfig?.path === 'login' && isAuthenticated) {
      // Rota de login e usuário já autenticado, redirecione para a página principal
      return this.router.createUrlTree(['/']);
    }

    if (route.routeConfig?.path === 'login' || isAuthenticated) {
      // Rota de login ou usuário autenticado, permita o acesso
      return true;
    } else {
      // Usuário não autenticado, redirecione para a página de login
      return this.router.createUrlTree(['/login']);
    }
  }
}
