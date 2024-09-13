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
  newNote: Notes = new Notes(0,"", this.actRouter.snapshot.paramMap.get("username") ?? '', "", new Date())
  userNotes: Notes[] = [];
  id?: number = this.newNote.notesId;

  constructor(private notesService: NotesService, private actRouter: ActivatedRoute, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.loadUserNotes()
  }

  printNotes(){
    window.print()
  }
  loadUserNotes(){
    this.userService.getCurrentUser().subscribe((response) => {
      this.username = response.userName!;  
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
      this.newNote.createdAt = new Date();
    }
    this.notesService.CreateNote(this.newNote).subscribe(() => {

    }, error => {
      console.log("Error: ", error)
    })
    window.location.reload();
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

