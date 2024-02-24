const ranges = (min: number, max: number): number[] => {
    const result: number[] = [];

    for(let i = min; i <= max; i++){
        result.push(i);
    }

    return result;
}

console.log(ranges(5, 10))


type HumanCalc = {
    height: number;
    weight: number
}


const calcBMI = (human: HumanCalc): number => {
    return human.height / human.weight ** 2
}

const kota: HumanCalc = {
    height: 172,
    weight: 93
}

console.log(calcBMI(kota))


const sums = (base: number, ...args: number[]): number => {
    let result = base * 100;
    for (const num of args){
        result += num;
    }
    return result;
}

console.log(1, 10, 100);
console.log(123, 456);

const toLowerOrUpper = (str: string, upper: boolean = false) => {
    if(upper){
        return str.toUpperCase();
    }else{
        return str.toLowerCase();
    }
}

console.log(toLowerOrUpper("Hello"))
console.log((toLowerOrUpper("Hello", false)))
console.log((toLowerOrUpper("Hello", true)))