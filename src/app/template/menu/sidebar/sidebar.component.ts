import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    showSideBar: boolean = false;
    menu: MenuItem[] | undefined;
    
    constructor() { }

    ngOnInit() {
        this.menu = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: [''],
                command: () => {
                    this.openMenu()
                }
            },
            {
                label: 'Movimentação Financeira',
                icon: 'pi pi-fw pi-wallet',
                routerLink: ['/movimentacao-financeira'],
                command: () => {
                    this.openMenu()
                }
            },
            {
                label: 'Categorias',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/categorias'],
                command: () => {
                    this.openMenu()
                }
            },
            {
                label: 'Tipos de Movimentação',
                icon: 'pi pi-fw pi-file',
                routerLink: ['/tipos-movimento'],
                command: () => {
                    this.openMenu()
                }
            },
            {
                label: 'Meios de Pagamento',
                icon: 'pi pi-fw pi-money-bill',
                routerLink: ['/metodos-pagamento'],
                command: () => {
                    this.openMenu()
                }
            },
        ];
    }

    openMenu() {
        this.showSideBar = !this.showSideBar;
    }
  
}