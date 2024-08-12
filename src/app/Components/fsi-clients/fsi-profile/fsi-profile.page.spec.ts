import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FSIProfilePage } from './fsi-profile.page';

describe('FSIProfilePage', () => {
  let component: FSIProfilePage;
  let fixture: ComponentFixture<FSIProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FSIProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
