import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestnewpasswordComponent } from './restnewpassword.component';

describe('RestnewpasswordComponent', () => {
  let component: RestnewpasswordComponent;
  let fixture: ComponentFixture<RestnewpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestnewpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestnewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
