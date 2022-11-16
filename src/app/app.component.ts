import { Component } from '@angular/core';
import { AddressBook } from './model/address-book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address_Book_Frontend';
  person= new AddressBook("","","","","","","","")
}
