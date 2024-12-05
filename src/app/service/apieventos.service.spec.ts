import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApieventosService } from './apieventos.service';

describe('ApieventosService', () => {
  let service: ApieventosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa el módulo de pruebas de HttpClient
      providers: [ApieventosService]
    });
    service = TestBed.inject(ApieventosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes después de cada prueba
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve events from the API via GET', () => {
    const mockEventos = [
      { id: 1, name: 'Evento 1', date: '2024-12-01' },
      { id: 2, name: 'Evento 2', date: '2024-12-02' }
    ];

    service.getEventos().subscribe((eventos) => {
      expect(eventos.length).toBe(2);
      expect(eventos).toEqual(mockEventos);
    });

    // Comprueba que se haga una solicitud HTTP GET al endpoint correcto
    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');

    // Simula la respuesta de la API con datos mock
    req.flush(mockEventos);
  });

  it('should handle errors gracefully', () => {
    const mockErrorMessage = 'Failed to load events';

    service.getEventos().subscribe({
      next: () => fail('Expected an error, not events'),
      error: (error) => {
        expect(error.status).toBe(500);
        expect(error.error).toBe(mockErrorMessage);
      }
    });

    // Simula un error HTTP
    const req = httpMock.expectOne(service.apiUrl);
    req.flush(mockErrorMessage, { status: 500, statusText: 'Server Error' });
  });
});