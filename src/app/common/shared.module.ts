import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
})

export class SharedModule { }
