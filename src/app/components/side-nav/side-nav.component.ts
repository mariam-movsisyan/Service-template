import { Component } from "@angular/core";
import { SetingsService } from "../services";
import { IsettingsData } from "../services/settingsModel";
import { SidenavService } from "../services/sidenav.service";

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent {
    public activePage: number = 0
    public items: IsettingsData[] = []
    constructor(public _sidenavService: SidenavService,
        public _settingsService: SetingsService) {

    }
    public onClick(index: number) {
        this.activePage = index
    }

    public getSidenavItems(): IsettingsData[] {
        let items = this._settingsService.getItems()
        items = items.filter(e => e.isActive == true)
        return items
    }


}