import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    MenuModule,
    TableModule,
    TooltipModule,
    ChartModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    MenuModule,
    TableModule,
    TooltipModule,
    ChartModule,
  ],
})
export class PrimeNgModule {}
