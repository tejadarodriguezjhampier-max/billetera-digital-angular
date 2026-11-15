import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movimiento } from '../../modelo/movimiento';
import { NuevoMovimientoComponent } from '../nuevo-movimiento/nuevo-movimiento.component';

@Component({
  selector: 'app-billetera',
  standalone: true,
  imports: [CommonModule, NuevoMovimientoComponent],
  templateUrl: './billetera.component.html'
})
export class BilleteraComponent {
  saldo = signal<number>(250);
  movimientos = signal<Movimiento[]>([]);

  procesarMovimiento(movimiento: Movimiento): void {
    if (movimiento.monto <= 0) {
      return;
    }

    if (movimiento.tipo === 'Gasto') {
      if (movimiento.monto > this.saldo()) {
        return;
      }
      this.saldo.update((actual) => Number((actual - movimiento.monto).toFixed(2)));
    } else {
      this.saldo.update((actual) => Number((actual + movimiento.monto).toFixed(2)));
    }

    this.movimientos.update((lista) => [movimiento, ...lista]);
  }
}
