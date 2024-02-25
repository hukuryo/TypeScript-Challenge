const point = { x: 135, y: 35 };
type Point = typeof point;
const point2: Point = {x: 135, y: 35}
console.log(point2);

type point3 = {
    z: string
    c: number
}
type point4 = keyof point3;

const key: point4 = 'z';
console.log(key);

type Book = {
    title: string;
    price: number;
    rating: number;
};

type BookKeys = keyof Book;
const Books: BookKeys = "title"

const Books2: BookKeys = "price";
console.log(Books2);