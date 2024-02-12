import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WeddingsComponent } from './photogallery/weddings/weddings.component';
import { InigobeaComponent } from './photogallery/inigobea/inigobea.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'weddings',
    component: WeddingsComponent,
   /*  children: [{ path: 'wedding1', component: Wedding1Component }], */
  },
  { path: 'bea-iñigo', component: InigobeaComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
