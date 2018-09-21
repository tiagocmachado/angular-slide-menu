import {Action} from '@ngrx/store';

import {SaveUserResource} from './panel.resource';

export enum PanelActionsEnum {
  SubmitForm = '[Actions] Submit panel',
  SubmitFormSuccess = '[Actions] Submit panel success',
}

export module PanelAction {
  export module Submit {
    export class Form implements Action {
      readonly type = PanelActionsEnum.SubmitForm;

      constructor(public payload: SaveUserResource) {
      }
    }

    export class FormSuccess implements Action {
      readonly type = PanelActionsEnum.SubmitFormSuccess;
    }
  }
}

export type PanelAction = PanelAction.Submit.Form | PanelAction.Submit.FormSuccess;
