import { Component } from "@angular/core";

@Component({
    selector: 'nav-bar-component',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBar {
    navOpened: boolean = false;

    openNavbarHandler() {
        this.navOpened = !this.navOpened;
    }
}