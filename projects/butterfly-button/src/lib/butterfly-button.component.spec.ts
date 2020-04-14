import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflyButtonComponent } from './butterfly-button.component';

describe('ButterflyButtonComponent', () => {
  let component: ButterflyButtonComponent;
  let fixture: ComponentFixture<ButterflyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterflyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterflyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
