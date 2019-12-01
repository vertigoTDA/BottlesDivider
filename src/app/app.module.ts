import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxesComponent } from './boxes/boxes.component';
import { BottlesComponent } from './bottles/bottles.component';
import { BoxesService } from './boxes/boxes.service';
import { BottlesService } from './bottles/bottles.service';
import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxesComponent,
    BottlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BoxesService,
    BottlesService,
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
