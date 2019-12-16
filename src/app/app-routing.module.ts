import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallpapersComponent } from './pages/wallpapers/wallpapers.component';


const routes: Routes = [
  { path: 'wallpapers', component: WallpapersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
