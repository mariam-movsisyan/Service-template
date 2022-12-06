import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  MainContainerComponent,
  SettingsComponent,
  SideNavComponent,
  TodosComponent,
  TopBarComponent
} from './components';
import {
  SetingsService,
  SidenavService,
  TodosService
} from './components/services';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideNavComponent,
    MainContainerComponent,
    TodosComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SidenavService, TodosService, SetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
