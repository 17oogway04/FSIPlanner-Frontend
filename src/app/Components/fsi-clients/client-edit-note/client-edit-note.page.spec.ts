import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientEditNotePage } from './client-edit-note.page';

describe('ClientEditNotePage', () => {
  let component: ClientEditNotePage;
  let fixture: ComponentFixture<ClientEditNotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
