import { IsettingsData } from "./settingsModel"

export class SetingsService {
    private settingsData: IsettingsData[] = [
        {
            title: 'Home',
            link: 'https://example.com/Home',
            isActive: true
        },
        {
            title: 'Dashboard',
            link: 'https://example.com/Dashboard',
            isActive: true
        },
        {
            title: 'Orders',
            link: 'https://example.com/Orders',
            isActive: true
        },
        {
            title: 'Products',
            link: 'https://example.com/Products',
            isActive: true
        },
        {
            title: 'Customers',
            link: 'https://example.com/Customers',
            isActive: true
        },
    ]
    public setSettingsData(value: IsettingsData[]) {
        this.settingsData = value
        console.log(this.settingsData, 'set')
    }

    public getItems(): IsettingsData[] {
        return structuredClone(this.settingsData)
    }
}