import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreationCompteUserMoralComponent } from './vues/user/user-moral/creation-compte-user-moral.component';
import { HomeComponent } from './vues/home/home.component';
import { UserPhysiqueModule } from './vues/user/user-physique/modules/user-physique.module';
import { UserMoralModule } from './vues/user/user-moral/modules/user-moral.module';

@NgModule({
  declarations: [
    AppComponent,
    CreationCompteUserMoralComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UserPhysiqueModule,
    UserMoralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
