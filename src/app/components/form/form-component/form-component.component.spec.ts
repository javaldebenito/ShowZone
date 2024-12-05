import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar módulos de formularios
import { FormComponentComponent } from './form-component.component';

describe('FormComponentComponent', () => {
  let component: FormComponentComponent;
  let fixture: ComponentFixture<FormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponentComponent],
      imports: [FormsModule, ReactiveFormsModule], // Importar módulos necesarios
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit'); // Crear espía para onSubmit
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit')); // Simular envío del formulario
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled(); // Verificar que onSubmit fue llamado
  });
});