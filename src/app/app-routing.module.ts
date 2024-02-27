import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeepFaceComponent } from './deep-face/deep-face.component';

const routes: Routes = [
  {
    path:'',
    component:DeepFaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
