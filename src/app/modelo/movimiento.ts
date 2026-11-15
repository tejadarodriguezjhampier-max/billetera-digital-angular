export type TipoMovimiento = 'Recarga' | 'Gasto';

export interface Movimiento {
  id: number;
  tipo: TipoMovimiento;
  monto: number;
}
