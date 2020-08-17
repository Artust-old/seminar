import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { CountService } from 'src/app/common/services/count.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
  }
];

@NgModule({
  declarations: [MemberComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [MemberComponent, DetailComponent],
  providers: [CountService],
})
export class MemberModule { }
