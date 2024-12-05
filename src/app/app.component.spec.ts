import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './pages/home/home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Configuración previa a cada prueba
  beforeEach(async () => {
    // Configura el entorno de prueba para HomePage
    await TestBed.configureTestingModule({
      declarations: [HomePage],  // Declara el componente HomePage
      imports: [IonicModule.forRoot()]  // Importa el módulo necesario de Ionic
    }).compileComponents();

    // Crea el componente y su fixture
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;  // Obtiene la instancia del componente
    fixture.detectChanges();  // Detecta los cambios en la plantilla
  });

  // Prueba para verificar que el componente se cree correctamente
  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente exista
  });
});