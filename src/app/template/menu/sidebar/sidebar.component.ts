import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    showSideBar: boolean = false;

    constructor() { }

    ngOnInit() { }

    openMenu() {
        this.showSideBar = !this.showSideBar;
    }
  
}