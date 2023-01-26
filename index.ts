const names = ['Felipe', 'Brenda', 'Luca']

names.forEach(s => s+='pi');

console.debug(names);

function treatObject(obj: { x: string, z: string }) {
    console.debug(obj.x)
    console.debug(obj.z)
}

treatObject({ x: 'z', z: 'x' })

// extending
interface Animal {
    nomeCientifico: string,
    name: string,
    especie: string
}

interface Humans extends Animal {
    mammal: boolean
}

type Animal = {
    nomeCientifico: string,
    name: string,
    especie: string
}

type Human = Animal & {
    mammal: boolean
}

// Assertions
function logSomething<T>(): T {
    console.log("Something")
    return {} as T
}

const objectList = logSomething() as Record<string,any>[]

// or 
const text = logSomething<string>()

// but we still can use generics here:
let expr = "algo"

function extendingWithTypeInside<T>(): [T] {
    const list = (expr as any) as T //another simple example, but this i don't recomend

    return [list]
}

