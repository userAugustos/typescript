const names = ['Felipe', 'Brenda', 'Luca']

names.forEach(s => name+='pi');

console.debug(names);

function treatObject(obj: { x: string, z: string }) {
    console.debug(pt.x)
    console.debug(pt.z)
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

