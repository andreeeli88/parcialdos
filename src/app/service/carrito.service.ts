import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: any[] = [];

  constructor() {}

  // Método para agregar un producto al carrito
  agregarProducto(producto: any) {
    const productoExistente = this.carrito.find(p => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += 1; // Incrementar cantidad si ya existe
    } else {
      this.carrito.push({ ...producto, cantidad: 1 }); // Agregar nuevo producto
    }
  }

  // Método para obtener todos los productos del carrito
  obtenerCarrito() {
    return this.carrito;
  }

  // Método para eliminar un producto del carrito
  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(item => item.id !== id);
  }

  // Método para vaciar el carrito
  vaciarCarrito() {
    this.carrito = [];
  }
}
