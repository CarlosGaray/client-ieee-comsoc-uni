import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContactComponent } from './index-contact.component';

describe('IndexContactComponent', () => {
  let component: IndexContactComponent;
  let fixture: ComponentFixture<IndexContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
