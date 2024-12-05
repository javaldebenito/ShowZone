import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EventosPage } from './eventos.page';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { ApieventosService } from 'src/app/service/apieventos.service';

describe('EventosPage', () => {
  let component: EventosPage;
  let fixture: ComponentFixture<EventosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventosPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule], // Incluir HttpClientTestingModule
      providers: [ApieventosService], // Registrar el servicio
    }).compileComponents();

    fixture = TestBed.createComponent(EventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});