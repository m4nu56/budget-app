import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MouvementService} from './mouvement.service';
import {MouvementComponent} from './mouvement/mouvement.component';
import {ListMouvementComponent} from './list-mouvement/list-mouvement.component';


@NgModule({
  declarations: [
    AppComponent,
    MouvementComponent,
    ListMouvementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MouvementService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
