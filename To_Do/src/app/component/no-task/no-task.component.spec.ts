import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTaskComponent } from './no-task.component';

describe('NoTaskComponent', () => {
  let component: NoTaskComponent;
  let fixture: ComponentFixture<NoTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoTaskComponent]
    });
    fixture = TestBed.createComponent(NoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
