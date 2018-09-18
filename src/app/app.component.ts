import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {State} from './app.reducer';
import {PanelAction} from './panel/store/panel.actions';
import {PanelQueries} from './panel/store/panel.queries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Save Time';

  public sentence = 'With demo project, I’ve saved hundreds of hours that I used to waste on manual data entry.';

  public author = 'HELEN JACKSON';

  public panelState = false;

  private _subscription: Subscription = new Subscription();

  constructor(private _stateQuerias: PanelQueries,
              private _store: Store<State>) {
  }


  ngOnInit() {
    this._setSubscription();
  }

  public open() {
    this._store.dispatch(new PanelAction.Open.Panel());
  }

  public close() {
    this._store.dispatch(new PanelAction.Close.Panel());
  }

  private _setSubscription() {
    this._subscription = this._stateQuerias.observePanelState()
      .subscribe(state => this._togglePanel(state));
  }

  private _togglePanel(isPanelOpen: boolean) {
    this.panelState = isPanelOpen;
  }
}
