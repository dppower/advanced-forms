import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
    selector: 'template-sub-form',
    template: `
    <div ngModelGroup="address">
        <input name="street" ngModel>
        <input name="city" ngModel>
    </div>
    `,
    styles: [],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class TemplateSubFormComponent implements OnInit {

    constructor() { };

    ngOnInit() {
    };
}
