import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureModule } from './features/feature.module';

const routes: Routes = [
  {path:'' ,loadChildren:'./features/feature.module#FeatureModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,FeatureModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
