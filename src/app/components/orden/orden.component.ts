import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  eliminarProducto(id: number): void {
    this.carritoService.eliminarProducto(id);
    this.carrito = this.carritoService.obtenerCarrito(); 
  }

  confirmarOrden(): void {
    alert('Orden confirmada: ' + JSON.stringify(this.carrito));
    this.carritoService.vaciarCarrito(); 
    this.carrito = [];
  }
}
