import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { TabelaComponent } from './tabela/tabela.component';
import { ToastrModule } from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
     ToastrModule.forRoot(),
     MatProgressSpinnerModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
