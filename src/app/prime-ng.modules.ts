import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    MenuModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    MenuModule,
  ],
})
export class PrimeNgModules {}
