// and yeah, I know in a most perfect structure posts won't have loggedIn
export class posts {
    constructor(public loggedInUserId?: string){}

    cratePost(title: string){
        this.assertUserIsLoggedIn();

        this.publicPost(this.loggedInUserId, title)
    }

    assertUserIsLoggedIn(): asserts this is this & { loggedInUserId: string }  {
        if(!this.loggedInUserId) {
            throw new Error('You must be logged in')
        }
        return
    }

    publicPost(id: string, title?: string) {
        console.debug('post', id.length, title)
    }
}

// so let's se another scenario

let oneOfFirstFiveNumbers: 1 | 2 | 3 | 4 | 5;

function isOdd(value: number): asserts value is 1 | 3 | 5 {
    if(value % 2 !== 1) {
        throw new Error('valor é par')
    }
    console.debug("Value is Odd")
    return
}

function isBelowFour(value: number): asserts value is 1 | 2 | 3 | 4 {
    if(value >= 5){
        throw new Error('valor maior que 5')
    }
    console.log("Value is below four")
    return
}

// oneOfFirstFiveNumbers = 6; this isn't gonna work, since we defined until 5

oneOfFirstFiveNumbers = 3;

isBelowFour(oneOfFirstFiveNumbers);

isOdd(oneOfFirstFiveNumbers)




