import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalListItemComponent } from './components/animal-list-item/animal-list-item.component';
import { AnimalSwitchComponent } from './components/animal-switch/animal-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    AnimalListComponent,
    AnimalListItemComponent,
    AnimalSwitchComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
