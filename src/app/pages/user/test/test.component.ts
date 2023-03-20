import {Component, OnInit} from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'u-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  result = 0;

  constructor(private service: TestService) {
  }

  ngOnInit(): void {
    this.service.test().subscribe(res => this.result = res)
  }
}
