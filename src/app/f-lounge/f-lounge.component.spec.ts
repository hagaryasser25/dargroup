import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FLoungeComponent } from './f-lounge.component';

describe('FLoungeComponent', () => {
  let component: FLoungeComponent;
  let fixture: ComponentFixture<FLoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FLoungeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FLoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
