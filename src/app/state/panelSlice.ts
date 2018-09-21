import {SaveUserResource} from '../panel/store/panel.resource';

export const PANEL_SLICE_INITIAL_STATE: PanelSlice = {
  formValue: new SaveUserResource()
};

export class PanelSlice {
  formValue: SaveUserResource;
}
