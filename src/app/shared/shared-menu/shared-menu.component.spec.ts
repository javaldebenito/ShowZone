import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedMenuComponent } from './shared-menu.component';

describe('SharedMenuComponent', () => {
  let component: SharedMenuComponent;
  let fixture: ComponentFixture<SharedMenuComponent>;

  // Esta función se ejecuta antes de cada prueba.
  beforeEach(waitForAsync(() => {
    // Configura el entorno de pruebas, asegurándose de que el componente esté incluido en el módulo de prueba
    TestBed.configureTestingModule({
      declarations: [ SharedMenuComponent ],
      imports: [IonicModule.forRoot()] // Importa el módulo Ionic necesario para el componente
    }).compileComponents();

    // Crea el componente y asigna el fixture (instancia del componente)
    fixture = TestBed.createComponent(SharedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios del componente (actualiza el DOM)
  }));

  // Esta prueba verifica que el componente se haya creado correctamente.
  it('should create', () => {
    expect(component).toBeTruthy(); // Si el componente se crea correctamente, la prueba pasa.
  });

  // Esta prueba comprueba que el texto estático "shared-menu works!" aparece correctamente en el DOM.
  it('should display the correct text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('shared-menu works!');
  });
});