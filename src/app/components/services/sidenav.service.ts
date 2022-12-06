export class SidenavService {
    private isSidenavOpened: boolean = true;

    public getIsSidenavOpened(): boolean {
        return this.isSidenavOpened
    }

    public toggleIsOpened(): void {
        this.isSidenavOpened = !this.isSidenavOpened
    }
}