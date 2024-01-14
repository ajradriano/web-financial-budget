import { AuthGuard } from './auth/auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TypesComponent } from './components/types/types.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'categorias', component: CategoriesComponent, canActivate:[AuthGuard]},
  { path: 'tipos-movimento', component: TypesComponent, canActivate:[AuthGuard]},
  { path: 'metodos-pagamento', component: PaymentMethodComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
