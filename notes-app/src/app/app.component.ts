import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public products: Array<any> =
  [
    { productName: 'Test1' },
    { productName: 'Test2' },
    { productName: 'Test3' },
    { productName: 'Test4' },
    { productName: 'Test5' },
    { productName: 'Test6' }
  ];
}
