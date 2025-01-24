import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisabilityinsPage } from './disabilityins.page';

describe('DisabilityinsPage', () => {
  let component: DisabilityinsPage;
  let fixture: ComponentFixture<DisabilityinsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabilityinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
