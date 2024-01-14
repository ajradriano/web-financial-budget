import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/auth';
  private key = 'token'

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  login(email: string, password: string): Observable<any> {
    const credentials = {email, password}
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        let tokenValidUntil = new Date()
        tokenValidUntil.setHours(tokenValidUntil.getHours() + response.expires_in/60/60)
        this.cookieService.set(this.key, response.access_token, tokenValidUntil)
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }
}
