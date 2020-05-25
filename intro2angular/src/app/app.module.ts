import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UsersComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
