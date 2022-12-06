import { Component } from "@angular/core";
import { SidenavService } from "../services/sidenav.service";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {

    constructor(public _sidenavService: SidenavService) {

    }
    public toggleIsSidenavOpened() {
        this._sidenavService.toggleIsOpened()
    }

}