import {Component, OnInit} from '@angular/core';
import {SessionQuery} from '../../../core/stores/session/session.query';
import {User} from '../../../core/stores/session/session.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  user: Observable<User>;

  constructor(private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
    this.user = this.sessionQuery.getUser();
  }

}
