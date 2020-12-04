import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtableComponent } from './hash-table.component';

describe('HashtableComponent', () => {
  let component: HashtableComponent;
  let fixture: ComponentFixture<HashtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HashtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
