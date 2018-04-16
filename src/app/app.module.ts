import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { RequiredTextComponent } from './required-text/required-text.component';
import { AddressCompositeFormComponent } from './address-composite-form/address-composite-form.component';
import { TemplateSubFormComponent } from './template-sub-form/template-sub-form.component';
import { ReactiveSubFormComponent } from './reactive-sub-form/reactive-sub-form.component';

@NgModule({
    declarations: [
        AppComponent,
        RequiredTextComponent,
        AddressCompositeFormComponent,
        TemplateSubFormComponent,
        ReactiveSubFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
