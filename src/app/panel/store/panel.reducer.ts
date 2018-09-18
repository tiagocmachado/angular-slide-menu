import {PanelActionsEnum, PanelAction} from './panel.actions';
import {UI_SLICE_INITIAL_STATE, UiSlice} from '../../state/ui.slice';

export function panelReducer(state: UiSlice = UI_SLICE_INITIAL_STATE, action: PanelAction): UiSlice {
  switch (action.type) {

    case PanelActionsEnum.OpenPanel:
      return Object.assign({}, state, {
        panelOpen: true
      });

    case PanelActionsEnum.ResetPanel:
    case PanelActionsEnum.ClosePanel: {
      return Object.assign({}, state, {
        panelOpen: false
      });
    }

    default:
      return state;
  }
}

export const REDUCER = panelReducer;
