import { FormsModule } from '@angular/forms';
import { BindingIOComponent } from './binding-io.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BindingIOComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [BindingIOComponent],
})
export class BindingIOModule { }
