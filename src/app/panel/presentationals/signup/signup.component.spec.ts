import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {SignupComponent} from './signup.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Action, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

import {SharedModule} from '../../../ui/shared.module';

describe('Signup Component', () => {
  let fixture: ComponentFixture<SignupComponent>;
  let comp: SignupComponent;
  let de: DebugElement;
  let el: HTMLElement;
  let store: any;

  const setFormValues = (formValues: any) => {
    comp.form.get('firstName').setValue(formValues.title);
    comp.form.get('lastName').setValue(formValues.projectNumber);
    comp.form.get('companyName').setValue(formValues.start);
    comp.form.get('email').setValue(formValues.end);
    comp.form.get('password').setValue(formValues.password);
    comp.form.get('confirmPassword').setValue(formValues.confirmPassword);
    comp.form.get('agreement').setValue(formValues.end);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: Store,
          useValue: new MockStore({})
        }
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ],
      declarations: [SignupComponent]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    store = TestBed.get(Store);

  });

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });


  it('should setup form on init', () => {
    expect(comp.form).toBeUndefined();

    comp.ngOnInit();
    expect(comp.form).toBeDefined();
  });

  it('should setup form when handleCancel() is triggered', () => {
    const firstName = 'tiago';

    comp.ngOnInit();
    comp.form.get('firstName').setValue(firstName);

    expect(comp.form.get('firstName').value).toBe(firstName);
    comp.handleCancel();

    expect(comp.form.get('firstName').value).toBeNull();
  });

  it('should not submit form when form is invalid', () => {
    const formInvalidValues: any = {
      firstName: 'firstName',
      lastName: 'lastName',
      companyName: 'companyName',
      email: 'email',
      password: 'password',
      confirmPassword: 'confirmPassword',
      agreement: true
    };

    comp.ngOnInit();

    setFormValues(formInvalidValues);

    expect(comp.isFormValid()).toBe(false);
  });
});


class MockStore<T> extends BehaviorSubject<T> {
  constructor(private _initialState: T) {
    super(_initialState);
  }

  dispatch = (action: Action): void => {
  };

  select = <T, R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
    return map.call(this, pathOrMapFn);
  };

  nextMock(mock: T) {
    this.next(mock);
  }
}
