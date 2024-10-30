import { Component, OnInit } from '@angular/core';
import { ApieventosService } from 'src/app/service/apieventos.service';
import { MenuController } from '@ionic/angular'; 
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  items: any[] = []; 
  constructor(private apiEventosService: ApieventosService, private menu: MenuController) { }



  ngOnInit() {
    const eventos  = localStorage.getItem('eventos');
    if (eventos) {
      this.items = JSON.parse(eventos);
     }else{
      this.apiEventosService.getEventos().subscribe((eventos) => {
        this.items = eventos; 
        localStorage.setItem('eventos', JSON.stringify(this.items));
        }
       );
      }
    }
}
