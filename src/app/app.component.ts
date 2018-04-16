import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-root',
    template: ` 
    <required-text [formControl]="name_input"></required-text>   
    <form [formGroup]="address_form_group">         
        <address-composite-form formControlName="address"></address-composite-form>
    </form>
    <form #f="ngForm"> 
        <p>{{f.value | json}}</p>       
        <address-composite-form ngModel name="address"></address-composite-form>
    </form>
    <form #sf="ngForm">
        <p>{{sf.value | json}}</p>
        <template-sub-form></template-sub-form>
    </form>
    <form [formGroup]="reactive_sub_form_group">         
        <reactive-sub-form></reactive-sub-form>
    </form>
    `,
    styles: []
})
export class AppComponent {
    name_input = new FormControl();

    address_form_group = new FormGroup({
        address: new FormControl()
    });

    reactive_sub_form_group = new FormGroup({});

    constructor() { };
}
