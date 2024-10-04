import { Component, inject } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  servicio = inject(ProductosService);
  carritoOrden = inject(CarritoService);


  productos:any
  ngOnInit(){
    this.servicio.getProdcuto().subscribe(t=>{
      console.log(t);
      this.productos = t
    })
  }
  agregar(item: any): void {
    this.carritoOrden.agregarProducto(item);
   
  }
}
