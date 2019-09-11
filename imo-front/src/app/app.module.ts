import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CreationCompteUserMoralComponent } from './vues/user/user-moral/creation-compte-user-moral.component';
import { HomeComponent } from './vues/home/home.component';
import { UserMoralModule } from './vues/user/user-moral/modules/user-moral.module';
import { UserPhysiqueModule } from './vues/user/user-physique/modules/user-physique.module';
import { APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './vues/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationCompteUserMoralComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserMoralModule,
    UserPhysiqueModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
