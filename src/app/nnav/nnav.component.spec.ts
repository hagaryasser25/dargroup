import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NnavComponent } from './nnav.component';

describe('NnavComponent', () => {
  let component: NnavComponent;
  let fixture: ComponentFixture<NnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
