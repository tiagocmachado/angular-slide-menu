import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {InputTextComponent} from './forms/input-text/input-text.component';
import {CheckboxComponent} from './forms/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CheckboxComponent,
    InputTextComponent
  ],
  declarations: [
    CheckboxComponent,
    InputTextComponent
  ]
})
export class SharedModule {
}
