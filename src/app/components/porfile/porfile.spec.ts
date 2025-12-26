import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Porfile } from './porfile';

describe('Porfile', () => {
  let component: Porfile;
  let fixture: ComponentFixture<Porfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Porfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Porfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
