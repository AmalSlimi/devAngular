import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductionComponent } from './production/production.component';
import { AddLeavComponent } from './add-leav/add-leav.component';
import { LeavListComponent } from './leav-list/leav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionComponent,
    AddLeavComponent,
    LeavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
