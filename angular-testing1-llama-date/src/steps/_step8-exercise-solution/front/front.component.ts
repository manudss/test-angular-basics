import { Component } from '@angular/core';

@Component({
  selector: 'ld-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  
  llamas = [
    { name: 'Richard' },
    { name: 'Bonnie' }
  ];

  isListVisible(): boolean {
    return (this.llamas.length > 0);
  }

}
