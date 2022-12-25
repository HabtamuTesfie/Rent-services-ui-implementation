import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {ServiceRegistrationComponent} from './components/service-registration/service-registration.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';

const routes: Routes =
[
  {path: 'serviceRegistration', component: ServiceRegistrationComponent},
  {path: 'dataConfirmation', component: ConfirmationComponent},
  {path: '**', component: NavigationMenuComponent}

];

@NgModule(
{
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
