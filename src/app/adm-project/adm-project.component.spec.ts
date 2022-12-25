import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProjectComponent } from './adm-project.component';

describe('AdmProjectComponent', () => {
  let component: AdmProjectComponent;
  let fixture: ComponentFixture<AdmProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
