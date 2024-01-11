import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Libs
import { PrimeNgModule } from './prime-ng.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.modules';
import { SidebarComponent } from './template/menu/sidebar/sidebar.component';
import { FooterComponent } from './template/layout/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TitleComponent } from './template/layout/title/title.component';
import { ListComponent } from './template/layout/list/list.component';
import { TypesComponent } from './components/types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
  ],
  imports: [
    PrimeNgModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FooterComponent,
    TitleComponent,
    ListComponent,
    CategoriesComponent,
    TypesComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
