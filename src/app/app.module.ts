import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalListItemComponent } from './components/animal-list-item/animal-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    AnimalListComponent,
    AnimalListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
