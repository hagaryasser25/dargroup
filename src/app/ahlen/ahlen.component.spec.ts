import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhlenComponent } from './ahlen.component';

describe('AhlenComponent', () => {
  let component: AhlenComponent;
  let fixture: ComponentFixture<AhlenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhlenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhlenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
