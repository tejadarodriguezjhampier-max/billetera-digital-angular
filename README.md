# Caso 2 (Angular): Billetera Digital — Pago y Movimientos

Aplicación web desarrollada en **Angular** con **Bootstrap 5** para la gestión de saldo e historial de movimientos (recargas y gastos) mediante arquitectura padre-hijo (`BilleteraComponent` y `NuevoMovimientoComponent`).

## Requisitos previos

- **Node.js** 18.19+ o 20.11+ (LTS)
- **npm** 10+
- **Angular CLI** 19+ (opcional globalmente, se puede ejecutar con `npx ng`)

## Instalación de dependencias

1. Clonar o descargar el repositorio y ubicarse en la carpeta raíz del proyecto:
   ```bash
   cd caso2-billetera-digital
   ```
2. Instalar los paquetes de Node.js (incluye Angular y Bootstrap 5):
   ```bash
   npm install
   ```

## Ejecución de la aplicación

1. Iniciar el servidor de desarrollo de Angular:
   ```bash
   npm start
   ```
   *(o alternativamente `ng serve -o`)*
2. Abrir el navegador en:
   ```
   http://localhost:4200
   ```

## Estructura del proyecto

- `src/app/modelo/movimiento.ts`: Interfaz `Movimiento` y tipo `TipoMovimiento` (`'Recarga' | 'Gasto'`).
- `src/app/componentes/billetera/`: Componente padre dueño del estado (`saldo` inicial de `S/ 250.00` y lista de `movimientos`), renderizado con interpolación, `@if` y `@for`.
- `src/app/componentes/nuevo-movimiento/`: Componente hijo que recibe `saldo` vía `input()`, valida monto/saldo con `@if` y `[disabled]`, y notifica al padre mediante `output()`.
- `src/app/app.component.ts`: Componente contenedor principal.
