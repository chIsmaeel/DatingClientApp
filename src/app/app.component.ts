import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: { id: number; userName: string }[] | undefined;
  /**
   *
   */
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.http.get('http://localhost:5154/api/users').subscribe({
      next: (response: any) => (this.users = response),
      error: (error: any) => console.log(error),
    });
  }
}
