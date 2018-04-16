import { Component, OnInit, AfterViewInit, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'reactive-sub-form',
    template: `
    <div formGroupName="address">
        <input formControlName="street">
        <input formControlName="city">
    </div>
    `,
    styles: [],
    viewProviders: [
        { provide: ControlContainer, useExisting: FormGroupDirective }
    ]
})
export class ReactiveSubFormComponent implements OnInit {

    form_group: FormGroup;

    constructor(private parent_form_group_: FormGroupDirective) { };

    ngOnInit() {       
        this.form_group = this.parent_form_group_.form;
        this.form_group.addControl("address", new FormGroup({
            "street": new FormControl(),
            "city": new FormControl()
        }));
    };
}
