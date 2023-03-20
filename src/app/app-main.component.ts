import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
})
export class AppMainComponent {

  constructor(private router: Router) {
  }

  test(): void {
    this.router.navigate(['user', 'test']);
  }
}
