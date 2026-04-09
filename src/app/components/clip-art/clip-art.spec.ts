import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipArt } from './clip-art';

describe('ClipArt', () => {
  let component: ClipArt;
  let fixture: ComponentFixture<ClipArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipArt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipArt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
