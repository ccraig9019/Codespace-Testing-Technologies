class User {
    constructor(numberOfArticles) {
        this._numberOfArticles = numberOfArticles;
    }

    set setNumberOfArticles(numberOfArticles) {
        this._numberOfArticles = numberOfArticles;
    }

    get getNumberOfArticles() {
        return  this._numberOfArticles;
    }

    calcScores() {
    }
    
}

class Author extends User {
    calcScores() {
        const score = this._numberOfArticles * 10 + 20;
        return score;
    } 
}

class Editor extends User {
    calcScores() {
        const score = this._numberOfArticles * 6 + 15;
        return score;
    }
}

const author = new Author;
author.setNumberOfArticles = 8;
console.log(author.calcScores());

const editor = new Editor;
editor.setNumberOfArticles = 15;
console.log(editor.calcScores());
