import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcompteurComponent } from './randomcompteur.component';

describe('RandomcompteurComponent', () => {
  let component: RandomcompteurComponent;
  let fixture: ComponentFixture<RandomcompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomcompteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomcompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
