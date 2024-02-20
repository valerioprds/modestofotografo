import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WeddingsComponent } from './photogallery/weddings/weddings.component';
import { InigobeaComponent } from './photogallery/inigobea/inigobea.component';
import { CarlamarcosComponent } from './photogallery/carlamarcos/carlamarcos.component';
import { DavidangelComponent } from './photogallery/davidangel/davidangel.component';
import { SandradiegoComponent } from './photogallery/sandradiego/sandradiego.component';
import { ContactComponent } from './contact/contact.component';
import { RafapaolaComponent } from './photogallery/rafapaola/rafapaola.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'weddings',
    component: WeddingsComponent,
  },
  { path: 'bea-iñigo', component: InigobeaComponent },
  { path: 'carla-marcos', component: CarlamarcosComponent },
  { path: 'david-angel', component: DavidangelComponent },
  { path: 'sandra-diego', component: SandradiegoComponent },
  { path: 'rafa-paola', component: RafapaolaComponent },

  { path: 'contacto', component: ContactComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
