import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssigsDetailComponent } from './assigs-detail/assigs-detail.component';
import { MembersDetailComponent } from './members-detail/members-detail.component';

const routes: Routes = [
  {path: 'member-detail/:id', component: MembersDetailComponent},
  {path: 'assigs-detail/:id', component: AssigsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ MembersDetailComponent ]