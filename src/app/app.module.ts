import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SpinnersComponent, DropdownComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
