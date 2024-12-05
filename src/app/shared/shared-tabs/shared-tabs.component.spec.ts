import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedTabsComponent } from './shared-tabs.component';

describe('SharedTabsComponent', () => {
  let component: SharedTabsComponent;
  let fixture: ComponentFixture<SharedTabsComponent>;

  // Configuración previa a cada prueba
  beforeEach(waitForAsync(() => {
    // Configura el entorno de prueba para SharedTabsComponent
    TestBed.configureTestingModule({
      declarations: [ SharedTabsComponent ],  // Declara el componente SharedTabsComponent
      imports: [IonicModule.forRoot()]  // Importa el módulo necesario de Ionic
    }).compileComponents();

    // Crea el componente y su fixture
    fixture = TestBed.createComponent(SharedTabsComponent);
    component = fixture.componentInstance;  // Obtiene la instancia del componente
    fixture.detectChanges();  // Detecta los cambios en la plantilla
  }));

  // Prueba para verificar que el componente se cree correctamente
  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente exista
  });

  // Prueba para verificar que la función `changeTab` se llama cuando se hace clic en una pestaña
  it('should call changeTab when a tab is clicked', () => {
    // Espía la función `changeTab` para verificar si se llama
    spyOn(component, 'changeTab');

    // Simula un clic en la pestaña 'inicio'
    const tabButton = fixture.debugElement.nativeElement.querySelector('.tab-button');
    tabButton.click();

    // Verifica si la función `changeTab` fue llamada
    expect(component.changeTab).toHaveBeenCalled();
  });
});