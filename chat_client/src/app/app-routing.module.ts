import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:"chat", pathMatch:"full"},
  { path: 'chat', loadChildren: () => import('./pages/chat-page/chat-page.module').then(m => m.ChatPageModule) }, 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
