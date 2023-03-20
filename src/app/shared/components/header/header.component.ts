import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'u-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() title = '';
  @Input() canGoBack = false;
  @Input() goBackRoute = '';
  @Input() isProfile = false;
  @Input() numberOfSteps = 1;
  @Input() currentStep = 0;
  progressValue = 0;

  ngOnInit(): void {
    this.calculateProgress();
  }

  constructor(private router: Router) {
  }

  calculateProgress(): void {
    this.progressValue = (this.currentStep / this.numberOfSteps) * 100;
  }

  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  goBack(): void {
    this.router.navigate([this.goBackRoute]);
  }
}
