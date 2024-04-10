//// @ts-nocheck
//tslint:disable
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  override move(distance = 5) {
    console.log(this.name + ' moves...')
    super.move(distance)
  }
}

const dog = new Dog('Tobby')
dog.move() //no hay que pasarle parámetros? o se pasa por defecto?

class ClassWithPrivateMethodsAndProperties {
  publicProperty = 42
  private privateProperty = 42

  publicMethod() {
    return this.privateMethod()
  }

  private privateMethod() {
    return this.privateProperty
  }
}

class ImprovedConstructorAssignment {
  constructor(public name: string) {}

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Person extends Animal {
  age: number

  constructor(name, age) {
    super(name)
    this.age = age
  }

  public
  override move(distance: number = 3) {
    console.log('Moved ' + distance + ' meters')
  }
}

class ReadonlyClass {
  constructor(
    public readonly name: string,
    private readonly foo: number,
    private readonly person: Person,
  ) {}

  bar(): any {
    this.person.age = 43
    return this.name + this.foo
  }
}

let foo: ReadonlyClass

abstract class CostCalculator {
  abstract billingCost(): any

  calculateCost(baseCost: any) {
    const total = baseCost + this.productionCost() + this.logisticsCost() + this.marketingCost() + this.billingCost()
    return total
  }

  private productionCost() {
    return 5
  }

  private logisticsCost() {
    return 2
  }

  private marketingCost() {
    return 1
  }
}

class SpainCostCalculator extends CostCalculator {
  override billingCost(): any {
    return 21
  }
}

class FranceCostCalculator extends CostCalculator {
  override billingCost(): any {
    return 21
  }
}

export {}
