import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientNotesPage } from './client-notes.page';

describe('ClientNotesPage', () => {
  let component: ClientNotesPage;
  let fixture: ComponentFixture<ClientNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
