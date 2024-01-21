## readonly修飾子による制約
readonly修飾子は、プロパティの再割り当てを禁止する修飾子です。
extendsで制約をかけることで、配列の中の値が再割り当てできないことが前提となるのでas constを指定した配列を受け取れるようになります。

## Mapped Types
Mapped Typesはユニオン型を使って、新しいオブジェクトの型を生成する機能です。
Mapped Typesには文字列だけでなく数字の型も使うことができます。

例えば、以下のようなユニオン型があったとします。

```
type TodoKeys = "title" | "description"
```
このユニオン型を使って、以下のようなオブジェクトの型を生成することができます。

```
type Todo = {
  [K in TodoKeys]: string
}

// 以下のように展開される
type Todo = {
  title: string
  description: string
}
```

