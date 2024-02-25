import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturasCondicionaisComponent } from './estruturas-condicionais.component';

describe('EstruturasCondicionaisComponent', () => {
  let component: EstruturasCondicionaisComponent;
  let fixture: ComponentFixture<EstruturasCondicionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstruturasCondicionaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstruturasCondicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
