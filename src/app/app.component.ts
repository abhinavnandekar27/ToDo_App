import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  newNoteDescription: string = '';
  newNoteDueDate: string = '';
  newNotePriority: string = 'Low';

  constructor(private service: SharedService) { }

  notes: any = [];

  refreshNotes() {
    this.service.getNotes().subscribe((res) => {
      this.notes = res;
    })
  }

  ngOnInit() {
    this.refreshNotes();
  }

  addNotes() {
    const newNote = {
      description: this.newNoteDescription,
      dueDate: this.newNoteDueDate,
      priority: this.newNotePriority
    };
    this.service.addNotes(newNote).then((res) => {
      console.log(res);
      this.refreshNotes();
      this.newNoteDescription = '';
      this.newNoteDueDate = '';
      this.newNotePriority = 'Low';
    })
  }

  deleteNotes(id: string) {
    this.service.deleteNotes(id).then((res) => {
      console.log(res);
      this.refreshNotes();
    })
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Low':
        return 'priority-low';
      case 'Medium':
        return 'priority-medium';
      case 'High':
        return 'priority-high';
      default:
        return '';
    }
  }
}
