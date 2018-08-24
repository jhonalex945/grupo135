import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {    

  menu: string[];
  menuInicio: string[];

  constructor()
    {
      this.menu = ['Inicio1', 'Acerca1', 'Ayuda', 'Clientes']
      this.menuInicio = ['Ingresar', 'Salir']
    }

  ngOnInit() {
  }

}
