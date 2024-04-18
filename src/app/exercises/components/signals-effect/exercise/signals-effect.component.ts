import { Component, WritableSignal, Signal, signal, computed, effect } from '@angular/core'

@Component({
  selector: 'app-signals-effect',
  templateUrl: './signals-effect.component.html',
  styleUrl: './signals-effect.component.css',
  standalone: true,
  imports: [],
})
export class SignalsEffectComponent {
  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)
  displayAlert = computed(() => this.count() > 5)

  constructor() {
    effect(() => {
      if (this.displayAlert()) {
        alert('El contador es > 5')
      }
    })
  }

  increment() {
    this.count.update(value => value + 1)
  }

  decrement() {
    this.count.update(value => value - 1)
  }
}
