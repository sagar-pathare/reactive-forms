import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    declarations: [
        HomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CoreComponentModule { }
