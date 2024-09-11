import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [{
  path: '', component:DashboardComponent, children:[
    {path:'posts', component:PostsComponent},
    {path:'', redirectTo: 'posts', pathMatch:"full"}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
