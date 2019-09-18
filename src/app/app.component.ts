import { Component } from '@angular/core';
import { User } from './user';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('', 'steve@test.com',  9788572728, '', 'morning', true);
  
}
