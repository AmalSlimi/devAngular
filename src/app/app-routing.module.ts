import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionComponent } from './production/production.component';
import { AddLeavComponent } from './add-leav/add-leav.component';
import { LeavListComponent } from './leav-list/leav-list.component';

const routes: Routes = [
  { path: 'production', component: ProductionComponent },
  { path: 'addleav', component: AddLeavComponent },
  { path: 'leav-list', component: LeavListComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
