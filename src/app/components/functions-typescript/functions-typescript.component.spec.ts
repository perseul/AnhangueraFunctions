import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsTypescriptComponent } from './functions-typescript.component';

describe('FunctionsTypescriptComponent', () => {
  let component: FunctionsTypescriptComponent;
  let fixture: ComponentFixture<FunctionsTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionsTypescriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionsTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
