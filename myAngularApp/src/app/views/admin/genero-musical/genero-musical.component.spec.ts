import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroMusicalComponent } from './genero-musical.component';

describe('GeneroMusicalComponent', () => {
  let component: GeneroMusicalComponent;
  let fixture: ComponentFixture<GeneroMusicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroMusicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneroMusicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
