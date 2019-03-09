import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { AppGuard } from '../app.guard';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: WeatherViewComponent,
  canActivate: [AppGuard]

  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
