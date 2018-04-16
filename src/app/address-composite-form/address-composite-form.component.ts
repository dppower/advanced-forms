import { Component, OnInit, OnDestroy, Self } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormControl, NgModel, NgControl } from "@angular/forms";

import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'address-composite-form',
    template: `
    <form [formGroup]="form_group">
        <input formControlName="street" (blur)="onTouched()">
        <input formControlName="city" (blur)="onTouched()">
    </form>
    `,
    styles: []
})
export class AddressCompositeFormComponent implements OnInit, OnDestroy, ControlValueAccessor {

    form_group = new FormGroup({
        street: new FormControl(),
        city: new FormControl()
    });

    private form_changes_subscription_: Subscription;

    constructor(@Self() public control_dir: NgControl) {
        this.control_dir.valueAccessor = this;
    };

    ngOnInit() {
    };

    onTouched: (value: any) => void;

    writeValue(value: any) {
        // Set the value programmatically, so don't want to emit a value change event
        value && this.form_group.setValue(value, { emitEvent: false });
    };

    registerOnChange(fn: (value: any) => void) {
        this.form_changes_subscription_ = this.form_group.valueChanges.subscribe(fn);
    };

    registerOnTouched(fn: (value: any) => void) {
        this.onTouched = fn;
    };

    setDisabledState(should_disable: boolean) {
        should_disable ? this.form_group.disable() : this.form_group.enable();
    };

    ngOnDestroy() {
        this.form_changes_subscription_.unsubscribe();
    };
}
