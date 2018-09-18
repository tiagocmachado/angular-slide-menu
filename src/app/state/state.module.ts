import {ModuleWithProviders, NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';

import {environment} from '../../environments/environment';
import {panelReducer} from '../panel/store/panel.reducer';
import {PanelEffects} from '../panel/store/panel.effects';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({routerReducer: panelReducer}),
    EffectsModule.forRoot([
      PanelEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: []
    };
  }

}
