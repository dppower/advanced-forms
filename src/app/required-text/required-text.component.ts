import { Component, OnInit, ViewChild, ElementRef, Self } from '@angular/core';
import { 
    ControlValueAccessor, Validator, AbstractControl, Validators, 
    NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl 
} from "@angular/forms";

@Component({
    selector: 'required-text',
    template: `
    <input id="test" type="text" (input)="onChange($event.target.value)" (blur)="onTouched()" [disabled]="disabled" />
    <p class="error" *ngIf="control_dir && !control_dir.control.valid">This field is required.</p>
    `,
    styles: [],
    providers: [
        //{ provide: NG_VALUE_ACCESSOR, useExisting: RequiredTextComponent, multi: true } //=> These are required by ngControl
        //{ provide: NG_VALIDATORS, useExisting: RequiredTextComponent, multi: true } //=> Avoid circular dependency
    ]
})
export class RequiredTextComponent implements OnInit, ControlValueAccessor, Validator {

    @ViewChild("input") input: ElementRef;

    onChange: (value: any) => void;

    onTouched: (value: any) => void;

    disabled: boolean;

    constructor(
        @Self() public control_dir: NgControl, private element_ref_: ElementRef
    ) { 
        this.control_dir.valueAccessor = this;
    };

    ngOnInit() {
        const control = this.control_dir.control;
        let validators = control.validator ? [control.validator, this.validate] : this.validate;
        control.setValidators(validators);
        control.updateValueAndValidity();
    };

    validate(control: AbstractControl) {
        return Validators.required(control);
    };

    writeValue(value: any) {
        if (!this.input) return;
        this.input.nativeElement = value;
    };

    registerOnChange(fn: (value: any) => void) {
        this.onChange = fn;
    };

    registerOnTouched(fn: (value: any) => void) {
        this.onTouched = fn;
    };

    setDisabledState(is_disabled: boolean) {
        this.disabled = is_disabled;
    };
}
