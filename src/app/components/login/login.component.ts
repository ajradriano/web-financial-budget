import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimeNgModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = 'deverson@mail.com';
  password: string = 'deverson';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      (error) => {
        console.error('Erro durante o login: Verifique os dados enviados.');
      }
    );
  }
}
