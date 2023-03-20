import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'u-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  @Input() title = '';
  @Input() canGoBack = false;
  @Input() goBackRoute = '';
  @Input() isProfile = false;

  constructor(private router: Router) {
  }

  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  goBack(): void {
    this.router.navigate([this.goBackRoute]);
  }
}
