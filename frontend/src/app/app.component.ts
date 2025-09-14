import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: User = {
    name: '',
    age: 0,
    gender: '',
    profession: ''
  };
  names: string[] = [];

  constructor(private userService: UserService) {}

  saveUser() {
    this.userService.saveUser(this.user).subscribe(() => {
      alert('User saved successfully!');
      this.user = { name: '', age: 0, gender: '', profession: '' };
    });
  }

  getAllNames() {
    this.userService.getAllUsers().subscribe(users => {
      this.names = users.map(u => u.name);
    });
  }
}
