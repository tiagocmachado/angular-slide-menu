import {PanelAction, PanelActionsEnum} from './panel.actions';
import {PanelSlice, PANEL_SLICE_INITIAL_STATE} from '../../state/panelSlice';

export function panelReducer(state: PanelSlice = PANEL_SLICE_INITIAL_STATE, action: PanelAction): PanelSlice {
  switch (action.type) {

    case PanelActionsEnum.SubmitForm: {
      const submitFormAction = action as PanelAction.Submit.Form;

      return Object.assign({}, state, {
        formValue: submitFormAction.payload
      });
    }

    default:
      return state;
  }
}

export const REDUCER = panelReducer;
