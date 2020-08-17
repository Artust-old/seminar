import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalComponent } from './pages/normal/normal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MemberModule } from './pages/member/member.module';
import { OutletNestedModule } from './pages/outlet-nested/outlet-nested.module';
@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    OutletNestedModule,
    MemberModule,
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
