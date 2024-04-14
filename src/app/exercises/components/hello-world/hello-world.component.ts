import { Component } from '@angular/core'

@Component({
  selector: 'app-hello-world',
  standalone: true,
  template: `<h1 class="hello">{{ text }}</h1>`,
  styles: `
    .hello {
      color: var(--primary-color);
    }
  `,
  imports: [],
})
export class HelloWorldComponent {
  text: string = 'Hello World'
}
