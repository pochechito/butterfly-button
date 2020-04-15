import { NgModule } from '@angular/core';
import { ButterflyButtonComponent } from './butterfly-button/butterfly-button.component';
import { FormMutableDirective } from '../directives/form-mutable.directive';

@NgModule({
  declarations: [ButterflyButtonComponent, FormMutableDirective],
  imports: [
  ],
  exports: [ButterflyButtonComponent,FormMutableDirective]
})
export class ButterflyButtonModule { }
