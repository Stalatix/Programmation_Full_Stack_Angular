import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetcompteurComponent } from './resetcompteur.component';

describe('ResetcompteurComponent', () => {
  let component: ResetcompteurComponent;
  let fixture: ComponentFixture<ResetcompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetcompteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetcompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
