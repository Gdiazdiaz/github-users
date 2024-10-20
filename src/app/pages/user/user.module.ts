import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from 'src/app/store/search/search.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,  StoreModule.forFeature('search', searchReducer)
  ],
  declarations: [UserPage],
})
export class UserPageModule {}
