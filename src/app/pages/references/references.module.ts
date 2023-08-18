import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ReferencesPageRoutingModule } from './references-routing.module';

import { ReferencesPage } from './references.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferencesPageRoutingModule
  ],
  declarations: [ReferencesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReferencesPageModule {}
/*
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(), // Certifique-se de usar "forRoot()"
    ReferencesPageRoutingModule
  ],
  declarations: [ReferencesPage]
})
export class ReferencesPageModule {}

*/
