import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = {
    name: '',
    age: null,
    gender: '',
    profession: ''
  };
  names: string[] = [];

  constructor(private http: HttpClient) {}

  saveUser() {
    this.http.post('/api/users/save', this.user).subscribe(() => {
      alert('User saved successfully!');
      this.user = { name: '', age: null, gender: '', profession: '' };
    });
  }

  getAllNames() {
    this.http.get<string[]>('/api/users/names').subscribe(data => {
      this.names = data;
    });
  }
}
