import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedHeaderComponent } from './shared-header.component';
import { By } from '@angular/platform-browser';

describe('SharedHeaderComponent', () => {
  let component: SharedHeaderComponent;
  let fixture: ComponentFixture<SharedHeaderComponent>;

  // Configuración inicial antes de ejecutar las pruebas
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SharedHeaderComponent], // Declaramos el componente que vamos a probar
      imports: [IonicModule.forRoot()] // Importamos Ionic para que el componente funcione correctamente en el entorno de pruebas
    }).compileComponents(); // Compilamos los componentes para simular un entorno real

    // Creamos la instancia del componente y su fixture (entorno de prueba)
    fixture = TestBed.createComponent(SharedHeaderComponent);
    component = fixture.componentInstance; // Obtenemos una referencia del componente
    fixture.detectChanges(); // Detectamos los cambios iniciales en el componente
  }));

  // Prueba básica: Verifica que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // El componente debería existir
  });

  // Prueba: Verifica que el título se renderiza correctamente en el ion-title
  it('should render the title in the header', () => {
    // Asignamos un valor a la propiedad `title`
    component.title = 'Test Title';
    fixture.detectChanges(); // Detectamos los cambios para actualizar el DOM

    // Buscamos el elemento ion-title que debería contener el título
    const headerTitle = fixture.debugElement.query(By.css('ion-title')).nativeElement;

    // Verificamos que el texto en ion-title contiene el título esperado
    expect(headerTitle.textContent).toContain('Test Title');
  });
});