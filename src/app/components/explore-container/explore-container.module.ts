import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/store/user/user.reducer';
import { searchReducer } from 'src/app/store/search/search.reducer';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, StoreModule.forFeature('user', userReducer), StoreModule.forFeature('search', searchReducer)],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
