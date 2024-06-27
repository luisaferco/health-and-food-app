import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DiaryComponent } from './components/diary/diary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, DiaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello';
  name = 'Luisa';

  changeTitle() {
    this.title = 'The Luisas meals';
    this.name = 'Your meals';
  }
  
}


