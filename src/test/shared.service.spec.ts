import { TestBed } from '@angular/core/testing';
import { SharedService } from 'src/app/services/shared.service';


describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
