import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notes } from 'src/app/Models/notes';
import { NotesService } from 'src/app/Services/notes.service';
import { UserService } from 'src/app/Services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-client-notes',
  templateUrl: './client-notes.page.html',
  styleUrls: ['./client-notes.page.scss'],
})
export class ClientNotesPage implements OnInit {
  username?: string = '';
  isFormVisible = false;
  userNotes: Notes[] = [];
  newNote: Notes = new Notes("",0,"",localStorage.getItem('ClientName')!,"", '')
  userId: string = "0";


  constructor(private myNotesService: NotesService, private actRouter: ActivatedRoute, private http: HttpClient, private myUserService: UserService) { }

  ngOnInit() {
    const name = localStorage.getItem('FSIName');
    if(name !== null){
      this.username = name;
    }
    
    this.loadUserNotes()
    console.log(this.username);
  }
  printNotes(){
    window.print()
  }
  getUsername(){
    this.myUserService.getUserByUserId(parseInt(this.userId)).subscribe((response) => {
      this.username = response.username;
    })
  }

  loadUserNotes(){
    this.myNotesService.GetNotesByUsername(this.username!).subscribe(response => {
      let sortedArray = response.reverse();
      this.userNotes = sortedArray;
    })
    // this.myNotesService.GetNotesByUserId(parseInt(this.userId)).subscribe(response => {
    //   let sortedArray = response.reverse();
    //   this.userNotes = sortedArray;
    // })
  }
  createNote(): void{
    if (!this.newNote.createdAt) {
      let mom = moment();
      this.newNote.createdAt = mom.toISOString();
    }
    this.myNotesService.CreateNote(this.newNote).subscribe((response) => {
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
    this.myNotesService.DeleteNote(id).subscribe(() => {
      window.alert("Note has been deleted");
      this.loadUserNotes()
    })
  }

}
