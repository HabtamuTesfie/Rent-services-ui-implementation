import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRegistrationComponent } from '../app/components/service-registration/service-registration.component';

describe('ServiceRegistrationComponent', () => {
  let component: ServiceRegistrationComponent;
  let fixture: ComponentFixture<ServiceRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
