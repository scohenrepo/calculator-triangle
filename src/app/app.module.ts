import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TriangleComponent } from './components/triangle/triangle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TriangleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
