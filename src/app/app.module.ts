import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnalogComponent } from './analog.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    AnalogComponent
    
  ],
  imports: [
    BrowserModule,    
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
