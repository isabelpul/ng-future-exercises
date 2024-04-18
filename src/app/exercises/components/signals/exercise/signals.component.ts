import { Component, WritableSignal, Signal, signal, computed } from '@angular/core'

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComponent {
  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)

  increment() {
    this.count.update(value => value + 1)
  }

  decrement() {
    this.count.update(value => value - 1)
  }
}
