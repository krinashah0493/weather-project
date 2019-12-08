import { NgModule } from "@angular/core";

import { LayoutModule } from "@angular/cdk/layout";

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"

const modules: any[] = [LayoutModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AppMaterialModule {
    
}
