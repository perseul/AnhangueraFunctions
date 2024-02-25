import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturasRepeticaoComponent } from './estruturas-repeticao.component';

describe('EstruturasRepeticaoComponent', () => {
  let component: EstruturasRepeticaoComponent;
  let fixture: ComponentFixture<EstruturasRepeticaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstruturasRepeticaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstruturasRepeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
