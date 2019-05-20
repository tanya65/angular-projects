import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { WomenCosmeticsComponent } from './women-cosmetics/women-cosmetics.component';
import { MenWatchesComponent } from './men-watches/men-watches.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import {SingleProductComponent} from './single-product/single-product.component'



const routes:Routes=[
  
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent,
  children:[
    {path:'womenClothing',component:WomenClothingComponent},
    {path:'womenCosmetics',component:WomenCosmeticsComponent},
    {path:'menClothing',component:MenClothingComponent},
    {path:'menWatches',component:MenWatchesComponent}
    ] 
  },
  {path:'product/:category/:name',component:SingleProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
