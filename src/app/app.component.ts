import { Component } from '@angular/core';
import { TasksApiService } from './tasks-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo lost';
  items: any[]=[];
  id:number=0;
  desc:string='';
  constructor(private apiService: TasksApiService) { }

  ngOnInit() {
    this.apiService.getTasks().subscribe((data:any) => {
      this.items = data;

    });
  }
}
