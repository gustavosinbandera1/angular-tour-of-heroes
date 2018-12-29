import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any = 'angular-tour-of-heroes';

  changeTitle(title: string): void {
    this.title = title;
  }
}
