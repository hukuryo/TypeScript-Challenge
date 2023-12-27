## <T>はジェネリック。ジェネリックは型をパラーメータとして受け取ることができる。
例：
```
type Foo<T> = {
  bar: T
}
```

## T['length']は、インデックスで、配列から要素の長さを取得することができる。
例：
```
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type teslaLength = tesla['length'] // 4
```