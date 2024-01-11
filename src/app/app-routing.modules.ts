import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TypesComponent } from './components/types/types.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'categorias', component: CategoriesComponent },
  { path: 'tipos-movimento', component: TypesComponent },
  { path: 'metodos-pagamento', component: PaymentMethodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
