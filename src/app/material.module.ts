import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule { }
