"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.some = void 0;
const user = {
    name: 'John',
    age: '36',
};
class some {
    constructor(loggedInUserId) {
        this.loggedInUserId = loggedInUserId;
    }
    cratePost(title) {
        // this.assertUserIsLoggedIn();
        this.publicPost(this.loggedInUserId, title);
    }
    assertUserIsLoggedIn() {
        if (!this.loggedInUserId) {
            throw new Error('You must be logged in');
        }
    }
    publicPost(id, title) {
        console.debug('post', id.length, title);
    }
}
exports.some = some;
const algo = new some();
algo.cratePost('titulo');
