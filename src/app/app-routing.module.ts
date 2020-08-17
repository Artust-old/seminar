import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalComponent } from './pages/normal/normal.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/member',
    pathMatch: 'full',
  },
  {
    path: 'member',
    loadChildren: () => import('./pages/member/member.module').then(m => m.MemberModule),
  },
  {
    path: 'normal',
    component: NormalComponent,
  },
  {
    path: 'outlet-nested',
    loadChildren: () => import('./pages/outlet-nested/outlet-nested.module').then(m => m.OutletNestedModule),
  },
  {
    path: 'unsubcribe',
    loadChildren: () => import('./pages/unsubcribe/unsubcribe.module').then(m => m.UnsubcribeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
