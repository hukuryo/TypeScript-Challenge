type Humans = {
    type: "human";
    name: string;
    age: number;
}

function setAge(human: Humans, age: Humans["age"]) {
    return{
        ...human,
        age
    }
}

const ryohei: Humans = {
    type: "human",
    name: "hukuryo",
    age: 25
}

const ryohei2 = setAge(ryohei, 25)
console.log(ryohei2);