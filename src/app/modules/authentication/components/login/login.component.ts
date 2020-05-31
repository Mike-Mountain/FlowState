import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SessionService} from '../../../core/stores/session/session.service';
import {createLoginForm} from '../../../core/stores/session/session.model';
import {LoadingService} from '../../../core/services/loading-service/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closePanel = new EventEmitter<boolean>();

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private sessionService: SessionService,
              public loadingService: LoadingService) {
  }

  ngOnInit(): void {
    this.loginForm = createLoginForm(this.formBuilder);
    this.loadingService.setIsLoading(false);
  }

  login(): void {
    this.loadingService.setIsLoading(true);
    this.sessionService.login(this.loginForm.value).subscribe(() => {
      this.loadingService.setIsLoading(false);
      this.closePanel.emit(true);
    });
  }

}
