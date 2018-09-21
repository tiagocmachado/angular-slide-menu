import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';

import {PanelAction, PanelActionsEnum} from './panel.actions';


@Injectable()
export class PanelEffects {
  constructor(private _actions$: Actions) {
  }

  @Effect()
  public submitFormActions = this._actions$
    .pipe(
      ofType(PanelActionsEnum.SubmitForm),
      map(_ => new PanelAction.Submit.FormSuccess())
    );
}
