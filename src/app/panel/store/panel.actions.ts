import {Action} from '@ngrx/store';

export enum PanelActionsEnum {
  OpenPanel = '[Actions] Open panel',
  OpenPanelSuccess = '[Actions] Open panel success',
  ClosePanel = '[Actions] Close panel',
  ClosePanelSuccess = '[Actions] Close panel success',
  ResetPanel = '[Actions] Reset panel',
  ResetPanelSuccess = '[Actions] Reset panel success',
}

export module PanelAction {

  export module Reset {
    export class Panel implements Action {
      readonly type = PanelActionsEnum.ResetPanel;
    }

    export class PanelSuccess implements Action {
      readonly type = PanelActionsEnum.ResetPanelSuccess;
    }
  }

  export module Open {
    export class Panel implements Action {
      readonly type = PanelActionsEnum.OpenPanel;
    }

    export class PanelSuccess implements Action {
      readonly type = PanelActionsEnum.OpenPanelSuccess;
    }
  }

  export module Close {
    export class Panel implements Action {
      readonly type = PanelActionsEnum.ClosePanel;
    }

    export class PanelSuccess implements Action {
      readonly type = PanelActionsEnum.ClosePanelSuccess;
    }
  }
}

export type PanelAction = PanelAction.Open.Panel
  | PanelAction.Open.PanelSuccess
  | PanelAction.Close.Panel
  | PanelAction.Close.PanelSuccess
  | PanelAction.Reset.Panel
  | PanelAction.Reset.PanelSuccess;
