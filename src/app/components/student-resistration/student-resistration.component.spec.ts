import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResistrationComponent } from './student-resistration.component';

describe('StudentResistrationComponent', () => {
  let component: StudentResistrationComponent;
  let fixture: ComponentFixture<StudentResistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentResistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentResistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
