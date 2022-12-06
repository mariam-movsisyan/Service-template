import { Component } from "@angular/core";
import { SetingsService } from "../services";
import { IsettingsData } from "../services/settingsModel";
import * as _ from 'lodash'

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
    public title!: string;
    public link!: string;
    public isActive!: boolean;
    public items: IsettingsData[] = []
    constructor(public _settingService: SetingsService) {
        this.items = _settingService.getItems()
    }

    public isObjectSame() {
        return _.isEqual(this.items, this._settingService.getItems())
    }

    public onClickAdd(): void {
        this.items.push({
            title: '',
            link: '',
            isActive: false
        })
    }

    public onClickSave() {
        let item = structuredClone(this.items)
        this._settingService.setSettingsData(item)
    }
}