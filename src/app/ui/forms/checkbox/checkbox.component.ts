import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'sm-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

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
  public label = '';

  /**
   * @description Input value
   * @type {any}
   */
  @Input()
  public value: boolean;

  /**
   * @description Angular form control
   * @type {FormControl}
   */
  @Input()
  public control: any;

  /**
   * @description Whether the input component is required to have a value
   * @type {boolean}
   */
  @Input()
  public isRequired: boolean;


  /**
   * @description Trigger input change event
   * @type {EventEmitter}
   */
  @Output()
  public onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * @description Method called by Angular Forms to write a value to the input component
   * @param {string} value
   */
  public writeValue(value: string): void {
  }

  /**
   * @description Method that sets the method to be called when the control receives a change event
   */
  public registerOnChange(fn: any): void {
    this._propagateChange = fn;
  }

  /**
   * @description Method that sets the method to be called when the control receives a touch event
   */
  public registerOnTouched() {
  }

  /**
   * @description Triggered when input changes
   */
  public onInputChange(): void {
    this._propagateChange(!this.control.value);
    this.onChange.emit(!this.control.value);
  }

  public isChecked(): boolean {
    return this.control.value;
  }

  private _propagateChange = (_: any): void => {
  };
}
