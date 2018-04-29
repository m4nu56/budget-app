import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouvementService } from './mouvement.service';
import { MouvementComponent } from './mouvement/mouvement.component';
import { ListMouvementComponent } from './list-mouvement/list-mouvement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [AppComponent, MouvementComponent, ListMouvementComponent, PageNotFoundComponent],
  imports: [BrowserModule, DashboardModule, AppRoutesModule],
  providers: [MouvementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
