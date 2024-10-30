import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shared-tabs',
  templateUrl: './shared-tabs.component.html',
  styleUrls: ['./shared-tabs.component.scss'],
})
export class SharedTabsComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  changeTab(tab: string) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeButton = Array.from(buttons).find(
      btn => btn.textContent?.trim().includes(this.getTabName(tab))
    );
    activeButton?.classList.add('active');

    // Navegar a la ruta correspondiente
    switch (tab) {
      case 'inicio':
        this.router.navigate(['/home']);
        break;
      case 'eventos':
        this.router.navigate(['/eventos']); // Cambia a la página de eventos
        break;
      case 'nosotros':
        this.router.navigate(['/nosotros']);
        break;
      default:
        break;
    }

   
  }
  private getTabName(tab: string): string {
    switch (tab) {
      case 'inicio': return 'Inicio';
      case 'eventos': return 'Eventos';
      case 'nosotros': return 'Nosotros';
      default: return '';
    }
  }
}
