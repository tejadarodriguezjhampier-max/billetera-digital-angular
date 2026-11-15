import { Component } from '@angular/core';
import { BilleteraComponent } from './componentes/billetera/billetera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BilleteraComponent],
  template: `<app-billetera />`
})
export class AppComponent {}
