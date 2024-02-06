// Qは{
//  age: number;
// }
var objQ = {
    age: 30,
};
var obj = {
    name: "sato",
    age: 40,
};
// エラー: 'name' プロパティは存在しません
// obj.name = "Alice";
console.log(obj.age); // => 40
