import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalComponent } from './pages/normal/normal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberModule } from './pages/member/member.module';
import { OutletNestedModule } from './pages/outlet-nested/outlet-nested.module';
import { MemberService } from './common/services/member.service';
import { BindingIOModule } from './common/components/binding-io/binding-io.module';
import { ListBindingModule } from './common/components/list-binding/list-binding.module';
@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    OutletNestedModule,
    MemberModule,

    BindingIOModule,
    ListBindingModule,
  ],
  // providers: [MemberService],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
