import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  constructor(private titleService: Title) { 

  }
  // Método para cambiar el título de la página
  changePageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
