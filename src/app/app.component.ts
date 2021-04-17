import { Component } from '@angular/core';

@Component({
  selector: 'dipper-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Team Dipper';
  public logo = 'images/logo.jpg';
  public slogan = 'Higher, better, faster!';
  public bio = 'Our team develops we apps using Angular 2. We have been doing this for 30 years! Can you believe it?';

  get date(): Date {
    return new Date();
  }
}
