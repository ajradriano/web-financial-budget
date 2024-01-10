import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Libs
import { ButtonModule } from 'primeng/button';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrimeNgModules } from './prime-ng.modules';
import { AppRoutingModule } from './app-routing.modules';
import { SidebarComponent } from './template/menu/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModules
  ],
  exports: [
    PrimeNgModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
