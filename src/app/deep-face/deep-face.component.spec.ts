import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepFaceComponent } from './deep-face.component';

describe('DeepFaceComponent', () => {
  let component: DeepFaceComponent;
  let fixture: ComponentFixture<DeepFaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeepFaceComponent]
    });
    fixture = TestBed.createComponent(DeepFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
