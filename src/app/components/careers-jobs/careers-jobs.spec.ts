import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersJobs } from './careers-jobs';

describe('CareersJobs', () => {
  let component: CareersJobs;
  let fixture: ComponentFixture<CareersJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersJobs],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersJobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
