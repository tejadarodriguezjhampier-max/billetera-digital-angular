import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimiento, TipoMovimiento } from '../../modelo/movimiento';

@Component({
  selector: 'app-nuevo-movimiento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-movimiento.component.html'
})
export class NuevoMovimientoComponent {
  saldo = input.required<number>();
  movimientoValido = output<Movimiento>();

  tipo: TipoMovimiento = 'Gasto';
  monto: number | null = null;

  get esMontoInvalido(): boolean {
    return this.monto === null || isNaN(this.monto) || this.monto <= 0;
  }

  get esSaldoInsuficiente(): boolean {
    if (this.esMontoInvalido) {
      return false;
    }
    return this.tipo === 'Gasto' && (this.monto as number) > this.saldo();
  }

  get formularioInvalido(): boolean {
    return this.esMontoInvalido || this.esSaldoInsuficiente;
  }

  registrar(): void {
    if (this.formularioInvalido || this.monto === null) {
      return;
    }

    const nuevo: Movimiento = {
      id: Date.now(),
      tipo: this.tipo,
      monto: Number(this.monto.toFixed(2))
    };

    this.movimientoValido.emit(nuevo);
    this.monto = null;
  }
}
