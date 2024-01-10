# Conditional Types について

条件によって、型を変更することができる機能
例：

```
type Foo<T> = T extends string ? string : number

type FooString = Foo<string> // string
type FooNumber = Foo<boolean> // number
```

T は string 型を継承している場合は、string 型を設定し、それ以外の型を継承している場合は、
number 型を設定するコード

# never 型について

「値をもたない」を意味する特殊な型

```
type Exclude<T, U> = T extends U ? never : T;

type Foo = Exclude<string | number | boolean, boolean> // string | number
```

このコードでは、継承した U 型と一致する型を T 型の中から除外する型定義です。
never 型は主に、以下のように使われる。

```
function throwError(): never {
  throw new Error();
}
```

```
function forever(): never {
  while (true) {} // 無限ループ
}
```

また、以下のように存在しないことが保証される型を表現することもできる。

```
type NonNullable<T> = T extends null | undefined ? never : T;

```
