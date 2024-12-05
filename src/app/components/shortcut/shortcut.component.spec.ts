import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ShortcutComponent } from './shortcut.component';

describe('ShortcutComponent', () => {
  let component: ShortcutComponent;
  let fixture: ComponentFixture<ShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortcutComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onClick method when button is clicked', () => {
    spyOn(component, 'onClick'); // Espiar el método

    // Obtén el botón del DOM
    const button = fixture.debugElement.nativeElement.querySelector('ion-button');
    button.click(); // Simula un clic

    // Verifica si el método fue llamado
    expect(component.onClick).toHaveBeenCalled();
  });
});