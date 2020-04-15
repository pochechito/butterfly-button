import { NgModule } from '@angular/core';
import { ButterflyButtonComponent } from './components/butterfly-button/butterfly-button.component';
import { FormMutableDirective } from './directives/form-mutable.directive';

@NgModule({
  declarations: [ButterflyButtonComponent, FormMutableDirective],
  imports: [
  ],
  exports: [ButterflyButtonComponent]
})
export class ButterflyButtonModule { }
