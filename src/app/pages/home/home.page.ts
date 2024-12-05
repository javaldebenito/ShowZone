import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    

  constructor(private router: Router,  private menu: MenuController) {} // Inyecta el Router

  changeTab(tab: string) {
    switch (tab) {
      case 'inicio':
        this.router.navigate(['/home']);
        break;
      case 'mis-eventos':
        this.router.navigate(['/eventos']); // Navega a la página de eventos
        break;
      case 'mi-cuenta':
        this.router.navigate(['/mi-cuenta']);
        break;
      default:
        break;
    }
  }

  


}
