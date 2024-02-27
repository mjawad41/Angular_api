import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeepFaceComponent } from './deep-face/deep-face.component';

@NgModule({
  declarations: [
    AppComponent,
    DeepFaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add this line

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
