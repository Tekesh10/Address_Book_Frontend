import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private http: HttpClient) { }

  addPerson(person: any) {
    return this.http.post("http://localhost:8080/addressBookService/add", person);
  }

  getAllPerson() {
    return this.http.get("http://localhost:8080/addressBookService/getAll");
  }

  deleteById(id: Number) {
    return this.http.delete("http://localhost:8080/addressBookService/delete/"+id);
  }

  id: Number= 0;
  person: any;
  update(id: Number, person: any) {
    this.id= id;
    this.person= person;
  }

  updateById(id: Number, person: any) {
    return this.http.put("http://localhost:8080/addressBookService/update/"+id, person);
  }
}
