# インデックスアクセス型について

インデックスアクセス型とは、オブジェクトのプロパティにアクセスできる機能

例：

```
interface Todo {
  title: string
  description: string
}

type Title = Todo["title"] // string
```

このように、Title にアクセスすると、「Todo」で title に対して定義した string を取得できる

例 2：

```
type Cars = ["Toyota", "Honda", "Nissan"]
type Car = Cars[0] // "Toyota"
```

配列にも使うことができる。

例 3：

```
type Cars = ["Toyota", "Honda", "Nissan"]
type Car = Cars[number] // "Toyota" | "Honda" | "Nissan"
```

number を使うと、配列の要素の型をユニオン型として取得できる。
