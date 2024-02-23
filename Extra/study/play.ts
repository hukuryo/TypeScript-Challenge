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