import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: "app.component.html",
    styles: [`
    :host {
        margin-left: 8px;
        display: flex;
        flex-direction: column;
    }
    .form-section {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
    }
    .nested-form {
        display: flex;
    }
    .form-value {
        margin-left: 1rem;
        margin-bottom: 0;
    }
    `]
})
export class AppComponent {

    name_input = new FormControl();

    address_form_group = new FormGroup({
        address: new FormControl()
    });

    reactive_sub_form_group = new FormGroup({});

    constructor() { };
}
