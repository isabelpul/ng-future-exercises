import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttributeBindingComponent {
  text = input.required<string>()

  //Este método devuelve un json con el valor de la clase a aplicar, en función de una condición:
  getClass() {
    return {
      'starts-with-a': this.text().toLowerCase().startsWith('a'),
      'has-five-chars': this.text().length > 5,
    }
  }
}
