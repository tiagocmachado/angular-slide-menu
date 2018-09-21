import {Component} from '@angular/core';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Save Time';

  public sentence = 'With demo project, I’ve saved hundreds of hours that I used to waste on manual data entry.';

  public author = 'HELEN JACKSON';
}
