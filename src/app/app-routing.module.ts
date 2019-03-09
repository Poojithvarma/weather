import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TestingPageComponent } from './testing-page/testing-page.component';
// import { CanActivate } from '@angulanpmr/router/src/utils/preactivation';
import { AppGuard } from './app.guard';

const routes: Routes = [
  
  { path: '', 
    pathMatch: 'full', 
    redirectTo: 'weather',
    canActivate: [AppGuard] 
  },
  { path: 'weather',
    loadChildren: './weather/weather.module#WeatherModule'
  },
  
  {
    path: 'test',
    component: TestingPageComponent,
    canActivate: [AppGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
