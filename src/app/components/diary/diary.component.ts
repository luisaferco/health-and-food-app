import { Component, Input, OnInit } from '@angular/core';
import { Diary } from '../../models/diary.model';
import { Title } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css',
  imports: [MatListModule]
})
export class DiaryComponent implements OnInit{


  @Input() diary!: Diary;
  @Input() title: String ='Diary Meals';

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.getDiaryMeals().subscribe((data) => {
      this.diary = data;
    })
  }

  getDiaryMeals(): Observable<any> {
    return this.http.get<any>('');
  }
  
}
