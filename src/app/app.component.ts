import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello';
  name = 'Luisa';

  changeTitle() {
    this.title = 'The Luisas meals';
    this.name = 'Your meals';
  }
  
}


