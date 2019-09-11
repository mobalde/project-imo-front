import { HomeComponent } from './vues/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule, MatSidenavModule, MatIconModule } from '@angular/material';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accueil', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule, MatToolbarModule, MatSidenavModule, MatIconModule]
})
export class AppRoutingModule { }
