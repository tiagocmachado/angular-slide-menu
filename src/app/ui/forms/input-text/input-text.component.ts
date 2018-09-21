import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'sm-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor, OnInit {

  /**
   * @description Input name
   * @type {string}
   */
  @Input()
  public name = '';

  /**
   * @description Input value
   * @type {any}
   */
  @Input()
  public value = '';

  /**
   * @description Input value
   * @type {any}
   */
  @Input()
  public label = '';

  /**
   * @description Whether the input component is required to have a value
   * @type {boolean}
   */
  @Input()
  public isRequired: boolean;

  /**
   * @description Property to know if input text is password
   * @type {boolean}
   */
  @Input()
  public isPassword: boolean;

  /**
   * @description Property to know if input text is password confirmation
   * @type {boolean}
   */
  @Input()
  public isPasswordConfirmation: boolean;

  /**
   * @description Angular form control
   * @type {FormControl}
   */
  @Input()
  public control: any;

  /**
   * @description Forwards input's blur event
   * @type {EventEmitter}
   */
  @Output()
  public onBlur: EventEmitter<string> = new EventEmitter<string>();

  /**
   * @description Forwards input's change event
   * @type {EventEmitter}
   */
  @Output()
  public onChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * @description Property to toggle input type
   * @type {boolean}
   */
  public showPassword = false;

  ngOnInit() {
    if (this.isPassword) {
      this.toggle(true);
    }
  }

  /**
   * @description toggle input text type
   */
  public toggle(onLoad: boolean): void {
    if (this.value !== '' || onLoad) {
      this.showPassword = !this.showPassword;
    }
  }

  /**
   * @description Method called after the value has changed from within the input component itself
   * @param {string} value
   */
  public onInternalChangeCallback(value: any): void {
    this.onChangeCallback(value);
    this.onTouchedCallback();
    this.onChange.emit(value);
  }

  /**
   * @description Method called by Angular Forms to write a value to the input component
   * @param {string} value
   */
  public writeValue(value: string): void {
    this.value = !value ? '' : value;
  }

  /**
   * @description Method to be called when the input's blur event is triggered
   * @param event
   */
  public onInputBlur(event: Event): void {
    const value = this.getTrimmedValue(this.value);

    value !== '' ? this.onInternalChangeCallback(value) : this.value = '';
  }


  public getTrimmedValue(value: string): string {
    return this._isNotEmptyString(value) ? value.trim() : value;
  }

  private _isNotEmptyString(value: string): boolean {
    return value.length > 0;
  }

  /**
   * @description Method to be called when the input is touched
   */
  public onTouchedCallback: () => void = () => {
  };

  /**
   * @description Method to be called when the input value changes
   */
  public onChangeCallback: (_: any) => void = () => {
  };

  /**
   * @description Set the function to be called when the control receives a change event.
   */
  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  /**
   * @description Set the function to be called when the control receives a touch event.
   */
  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
