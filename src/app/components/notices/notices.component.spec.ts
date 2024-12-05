import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NoticesComponent } from './notices.component';

describe('NoticesComponent', () => {
  let component: NoticesComponent;
  let fixture: ComponentFixture<NoticesComponent>;

  // Antes de cada prueba, configuramos el entorno de pruebas.
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesComponent ], // Declaramos el componente que vamos a probar.
      imports: [IonicModule.forRoot()] // Importamos el módulo Ionic necesario.
    }).compileComponents();

    // Creamos una instancia del componente y su fixture.
    fixture = TestBed.createComponent(NoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectamos los cambios en el componente.
  }));

  // Test para verificar que el componente se crea correctamente.
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente.
  });

  // Test para verificar que el contenido HTML se renderiza correctamente.
  it('should display the correct news content', () => {
    const compiled = fixture.debugElement.nativeElement;

    // Verificamos que el título principal "Noticias Musicales" esté presente.
    expect(compiled.querySelector('h2').textContent).toContain('Noticias Musicales');

    // Verificamos que el primer artículo tiene el título "Festival de Música Electrónica 2024".
    expect(compiled.querySelector('.news-card h3').textContent).toContain('Festival de Música Electrónica 2024');
    expect(compiled.querySelector('.news-card p').textContent).toContain('El próximo año llega con el esperado festival de música electrónica, reuniendo a los mejores DJs del mundo.');

    // Verificamos que el segundo artículo tiene el título "Concierto Sinfónico de Rock Clásico".
    const secondNewsCard = compiled.querySelectorAll('.news-card')[1];
    expect(secondNewsCard.querySelector('h3').textContent).toContain('Concierto Sinfónico de Rock Clásico');
    expect(secondNewsCard.querySelector('p').textContent).toContain('La orquesta sinfónica interpretará temas icónicos de las bandas más reconocidas de rock en un espectáculo inolvidable.');
  });
});