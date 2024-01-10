var user = { name: "hukuryo" };
console.log(user);
function repeat(element, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat('a', 5));
console.log(repeat(0, 100));
