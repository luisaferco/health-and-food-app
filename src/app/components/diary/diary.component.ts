import { Component, Input } from '@angular/core';
import { Diary } from '../../models/diary.model';
import { Title } from '@angular/platform-browser';
@Component({
  standalone: true,
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent {

  @Input() diary!: Diary;
  @Input() title: String =' diary Meals';
}
