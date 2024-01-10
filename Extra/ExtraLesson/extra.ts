const x = 1;
x = 2;

const o = { y: 1 };
o = { y: 2 }; // 変数そのものへの代入は不可
o.y = 2; // プロパティへの代入は許可

let obj: { readonly x: number } = { x: 1 };
obj = { x: 2 };
obj.x = 2;
// プロパティxに値を代入しようとしているためエラーとなる。