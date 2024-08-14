import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes } from 'src/app/Models/notes';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {
  id: string = "0";

  currentNote: Notes = {
    notesId: 0,
    subject: '',
    description: '',
    createdAt: new Date,
    username: this.actRouter.snapshot.paramMap.get("username") ?? ''

  }
  constructor(private actRouter: ActivatedRoute, private myNotesService: NotesService, private router: Router) { }

  ngOnInit() {
    const routeId = this.actRouter.snapshot.paramMap.get("id") ?? "";
    this.id = routeId;
    this.myNotesService.GetNotesById(parseInt(this.id)).subscribe(foundNote => {
      this.currentNote = foundNote;
      console.log(foundNote)
    })
  }

  onSubmit(){
    this.myNotesService.UpdateNote(parseInt(this.id), this.currentNote).subscribe(() => {
      window.alert("Notes updated successfully")
      this.router.navigate(['home/notes/', this.currentNote.username])
    }, error => {
      console.log("Error: ", error)
      if(error.status == 401){
        this.router.navigate(['/login'])
      }
    })
  }

}
