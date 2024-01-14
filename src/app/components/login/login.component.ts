import { Component } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
