import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeddingsComponent } from './photogallery/weddings/weddings.component';
import { InigobeaComponent } from './photogallery/inigobea/inigobea.component';
import { DavidangelComponent } from './photogallery/davidangel/davidangel.component';
import { SandradiegoComponent } from './photogallery/sandradiego/sandradiego.component';
import { ContactComponent } from './components/contact/contact.component';
import { RafapaolaComponent } from './photogallery/rafapaola/rafapaola.component';
import { ErosAngelaComponent } from './photogallery/eros-angela/eros-angela.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-modesto', component: ProfileComponent },
  { path: 'bodas', component: WeddingsComponent },
  { path: 'boda-bea-iñigo', component: InigobeaComponent },
  { path: 'boda-david-angel', component: DavidangelComponent },
  { path: 'boda-sandra-diego', component: SandradiegoComponent },
  { path: 'boda-rafa-paola', component: RafapaolaComponent },
  { path: 'eros-angela', component: ErosAngelaComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
