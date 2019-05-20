import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenCosmeticsComponent } from './women-cosmetics/women-cosmetics.component';
import { MenWatchesComponent } from './men-watches/men-watches.component';
import { ImageDivComponent } from './image-div/image-div.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent,
    ProductComponent,
    ContactComponent,
    HomeComponent,
    WomenClothingComponent,
    MenClothingComponent,
    WomenCosmeticsComponent,
    MenWatchesComponent,
    ImageDivComponent,
    SingleProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
