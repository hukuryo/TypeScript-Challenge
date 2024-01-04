type User<T> = {
    name: T;
}

const user: User<string> = { name: "hukuryo" };
console.log(user);

function repeat<T>(element: T, length: number): T[]{
    const result: T[] = [];
    for(let i = 0; i < length; i++){
        result.push(element)
    }
    return result
}

console.log(repeat<string>('a', 5));
console.log(repeat<number>(0, 100));