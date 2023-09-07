import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategComponent } from './subcateg.component';

describe('SubcategComponent', () => {
  let component: SubcategComponent;
  let fixture: ComponentFixture<SubcategComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategComponent]
    });
    fixture = TestBed.createComponent(SubcategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
