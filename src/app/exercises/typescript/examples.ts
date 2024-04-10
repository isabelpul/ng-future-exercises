class Foo {
  #foo: string
  #bar: string

  constructor(
    private readonly foo: number,
    private bar: string,
  ) {
    this.foo = foo
    this.bar = bar
  }
}
