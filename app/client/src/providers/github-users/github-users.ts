import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import { User } from '../../models/users';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'http://localhost:8080/api';

  constructor(public http: HttpClient) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/gallery`);
  }
}