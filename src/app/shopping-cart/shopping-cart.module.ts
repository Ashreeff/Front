import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CardsComponent } from './cards/cards.component';
import { PanierComponent } from './panier/panier.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    CardsComponent,
    PanierComponent,
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    HttpClientModule
 

  ]
})
export class ShoppingCartModule { }
