import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELoungeComponent } from './e-lounge.component';

describe('ELoungeComponent', () => {
  let component: ELoungeComponent;
  let fixture: ComponentFixture<ELoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELoungeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
