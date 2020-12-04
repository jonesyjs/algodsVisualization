import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashtableComponent } from './body/hashtables/hash-table/hash-table.component';

const routes: Routes = [
  { path: 'hashtable', component: HashtableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
