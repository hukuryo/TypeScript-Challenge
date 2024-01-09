# infer 型について

infer 型は、型を推論することができる機能

```
type ArrayItem<T> = T extends (infer R)[] ? R : never
```

この型は、T が配列の場合は、配列の中の型を返します。

以下のように使うことができる。

```
type Foo = ArrayItem<string[]> // string
```

この場合、infer R には string[]型が当てはまるので、R は string 型に推論され、R を返すので string 型が返されます。
このように推論される型を取得するのに infer は役立ちます。
