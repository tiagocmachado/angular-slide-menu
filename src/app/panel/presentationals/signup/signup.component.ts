import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

import {State} from '../../../app.reducer';
import {PanelAction} from '../../store/panel.actions';
import {SaveUserResource} from '../../store/panel.resource';

@Component({
  selector: 'sm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        query('.sm-signup__animator', style({opacity: 0, transform: 'translateY(-15%)'})),
        query('.sm-signup__animator', stagger('1000ms', [
          animate('1s ease-in', style({opacity: 1, transform: 'translateY(0)'}))
        ]))
      ])
    ])
  ]
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  private _defaultValues: any = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreement: null
  };

  constructor(private _formBuilder: FormBuilder,
              private _store: Store<State>) {
  }

  ngOnInit() {
    this._setupForm();
  }

  /**
   * @description method called to check if form is valid for submission
   */
  public isFormValid(): boolean {
    return this.form.valid;
  }

  /**
   * @description Method triggered to submit form and clean it again
   */
  public handleSubmit(): void {
    const submitValue: SaveUserResource = this._getSubmitValue();

    this._store.dispatch(new PanelAction.Submit.Form(submitValue));
    this.handleCancel();
  }

  /**
   * @description Method to clean form
   */
  public handleCancel(): void {
    this.form.reset();
  }

  /**
   * @description setup form default values and validations
   * @private
   */
  private _setupForm(): void {
    this.form = this._formBuilder.group({
      firstName: [this._defaultValues.firstName, [Validators.required]],
      lastName: [this._defaultValues.lastName, [Validators.required]],
      companyName: [this._defaultValues.companyName, [Validators.required]],
      email: [this._defaultValues.email, [Validators.required]],
      password: [this._defaultValues.password, [Validators.required]],
      confirmPassword: [this._defaultValues.confirmPassword, [Validators.required]],
      agreement: [this._defaultValues.agreement, [Validators.pattern('true'), Validators.required]]
    }, {
      validator: this._matchPassword('password', 'confirmPassword')
    });
  }

  /**
   * @description Checks if passwords are the same
   * @param k1
   * @param k2
   * @private
   */
  private _matchPassword(k1: any, k2: any): (form: FormGroup) => void {
    return (form: FormGroup) => {
      const p1 = form.controls[k1];
      const p2 = form.controls[k2];

      return p1.value === p2.value ? p2.setErrors(null) : p2.setErrors({notEquivalent: true});
    };
  }

  /**
   * @description Fetch information from for to submit
   * @private
   */
  private _getSubmitValue(): SaveUserResource {
    const {firstName, lastName, companyName, email, password} = this.form.value;

    return new SaveUserResource(
      firstName,
      lastName,
      companyName,
      email,
      password
    );
  }
}
