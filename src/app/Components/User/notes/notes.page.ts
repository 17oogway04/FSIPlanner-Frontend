import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Notes } from 'src/app/Models/notes';
import { User } from 'src/app/Models/user';
import { NotesService } from 'src/app/Services/notes.service';
import { UserService } from 'src/app/Services/user.service';
import { OverlayEventDetail } from '@ionic/core/components';
import * as moment from 'moment';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss']
})
export class NotesPage implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;
  
  username: string = "";
  name?: string;
  isFormVisible = false;
  isEditVisible = false;
  none = false;
  input = false;
  newNote: Notes = new Notes("",0,"",localStorage.getItem('ClientName')!,"","" )
  userNotes: Notes[] = [];
  id?: number = this.newNote.notesId;
  user: any;
  Notes:any;
  constructor(private notesService: NotesService, private actRouter: ActivatedRoute, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.saveUsername()
    this.loadUserNotes()
  }

  
  saveUsername(){
    this.userService.getCurrentUser().subscribe((response) => {
      this.Notes = response;
      localStorage.setItem('ClientName', this.Notes.result.username)
    })
  }
  printNotes(){
    window.print()
  }
  loadUserNotes(){
    this.userService.getCurrentUser().subscribe((response) => {
      this.user = response;
      this.username = this.user.result.userName;
      localStorage.setItem('ClientName', this.username);
      this.notesService.GetNotesByUsername(this.username).subscribe(response => {
      let sortedArray = response.reverse();
      this.userNotes = sortedArray;
      if(response !==null){
        this.input = true
        this.none = true;
      }
    })
    })
  
  }

  createNote(): void{
    if (!this.newNote.createdAt) {
      let mom = moment();
      this.newNote.createdAt = mom.toISOString();
    }
    this.notesService.CreateNote(this.newNote).subscribe((response) => {
      if(response != null)
      {
        window.alert("Note added successfully")
            window.location.reload();

      }else{
        window.alert("Error with adding note")
      }
    })
  }

  openForm(){
    this.isFormVisible = true;
  }

  closeForm(){
    this.isFormVisible = false;
  }
  
  deleteNote(id: number){
    this.notesService.DeleteNote(id).subscribe(() => {
      window.alert("Note has been deleted");
      this.loadUserNotes()
    })
  }
  }

