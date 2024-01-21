# 再起的な型

自分自身の型を参照できる機能のこと
以下のように書くことができる。

```
type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

```

```
// 使用例
const node: Tree = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null,
  },
  right: {
    value: 3,
    left: null,
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
};
```
