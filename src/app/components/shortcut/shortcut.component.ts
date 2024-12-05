import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.scss'],
})
export class ShortcutComponent  implements OnInit {

  onClick() {
    console.log('Botón clickeado');
  }
  
  constructor() { }

  ngOnInit() {}

}
