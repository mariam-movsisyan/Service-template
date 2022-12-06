import { Component } from "@angular/core";
import { SidenavService } from "../services/sidenav.service";

@Component({
    selector: 'app-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.css']
})

export class MainContainerComponent {
    public activeTabIndex: number = 1
    public items: string[] = ['TODOS', 'SETTINGS']
    constructor(public _sidenavService: SidenavService) {

    }

    public onChangeTab(index: number) {
        this.activeTabIndex = index
    }
}