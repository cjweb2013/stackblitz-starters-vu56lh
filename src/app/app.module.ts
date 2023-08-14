import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HomeComponent } from './feature/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule, BrowserModule],
  declarations: [AppComponent],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
