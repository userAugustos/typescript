// Generics exists to in a typed implementation we can have a flexible way of work with types
/**
 * Some patterns in generics, like
 * S = state
 * T = type
 * K = key
 * V = value
 * E = element
 *
 * But u can use the letter u want
 * */

function useState<S>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        return state = newState
    }

    return { getState, setState }
}

const state = useState<string>()

state.setState("123");
// state.setState(123); this does not work since we defined your generic as string

console.debug(state.getState())

// podemos também, definir que aquele generic é tudo, que ele extend

function setId<T extends string | number> (memberNumber: T) {
    let id: T;

    id = memberNumber

    return id
}
console.debug(setId("1232"));


// so to be clear when we want a generic is when we don't actually know what expect in fucntion, then we need to work the return, think about:

interface Animal {
    name: string
}

interface Human {
    firstName: string,
    lastName: string
}


function displayName<Titem extends Animal | Human>(item: Titem): Titem extends Animal ? { animalName: string } : { humanName: string } {
    // so i will have to see this ts-ignore
    if("name" in item) {
        // @ts-ignore
        return {
            animalName: item.name
        }
    }else {
        // @ts-ignore
        return {
            humanName: item.firstName
        }
    }
}

console.debug(displayName<Animal>({ name: "animal"}))
