import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBindingComponent } from './list-binding.component';



@NgModule({
  declarations: [ListBindingComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ListBindingComponent],
})
export class ListBindingModule { }
