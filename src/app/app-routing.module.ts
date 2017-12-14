import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcreationComponent } from './productcreation/productcreation.component';
import { ProducteditComponent } from './productedit/productedit.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    },
    {
      path: 'products',
      pathMatch: 'full',
      component: ProductlistComponent,
    },
    {
      path: 'products/new',
      pathMatch: 'full',
      component: ProductcreationComponent,
    },
    {
      path: 'edit/:id',
      pathMatch: 'full',
      component: ProducteditComponent,
    },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
