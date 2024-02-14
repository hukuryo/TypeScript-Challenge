
type signature = {
    underTwnty: boolean
    [index: string]: string | number | boolean
};

let hoge: signature = {underTwnty: false};

hoge.name = "ryohei";
hoge.age = 25;

console.log(hoge);