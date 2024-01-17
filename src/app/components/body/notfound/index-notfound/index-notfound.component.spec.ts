import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNotfoundComponent } from './index-notfound.component';

describe('IndexNotfoundComponent', () => {
  let component: IndexNotfoundComponent;
  let fixture: ComponentFixture<IndexNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
