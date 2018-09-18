import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';

import {PanelAction, PanelActionsEnum} from './panel.actions';


@Injectable()
export class PanelEffects {
  constructor(private _actions$: Actions) {
  }

  @Effect()
  public openPanelActions = this._actions$
    .pipe(
      ofType(PanelActionsEnum.OpenPanel),
      map(_ => new PanelAction.Open.PanelSuccess())
    );

  @Effect()
  public closePanelActions = this._actions$
    .pipe(
      ofType(PanelActionsEnum.ClosePanel),
      map(_ => new PanelAction.Close.PanelSuccess())
    );
}
