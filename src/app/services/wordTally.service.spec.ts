
import WordTallyService from './wordTally.service';


describe('WordTallyService', function () {
    describe('getTopWordRanks()', function () {
        it('returns a promise that resolves to array containing the top n wordRanks', function (done) {
            const service = new WordTallyService();
            service.getTopWordRanks(10)
                .then(topWords => {
                    console.log(JSON.stringify(topWords));
                    expect(Array.isArray(topWords)).toEqual(true);
                    done();
                });;

        });
    });
});

import { splitText } from './wordTally.service';
describe('splitText()', function(){
   it('splits text string into an array of word strings', function(){
       const text = "word1 word2\nword3";
       const words = splitText(text);
       expect(words.length).toEqual(3);
   });
});

import { sortDescendingOrder, WordScore } from './wordTally.service';
describe('sortDescendingOrder()', function(){
   it('Returns an array of WordScores sorted into descing order', function(){
       const text = "word1 word2\nword3";
       const wordScores: WordScore[] = [{word: 'jane', score: 10}, {word: 'hat', score: 5}, {word: 'bob', score: 20}];
       const sortedWordScore : WordScore[] = sortDescendingOrder(wordScores);
       const expected: WordScore[] = [{word: 'bob', score: 20}, {word: 'jane', score: 10}, {word: 'hat', score: 5}];
       expect(JSON.stringify(sortedWordScore)).toEqual(JSON.stringify(expected));
   });
});

import { tally } from './wordTally.service';
describe('tally()', function(){
   it('Counts word frequencies from string array', function(){
       const words: string[] = ['the', 'the', 'the'];
       const wordScores: WordScore[] = tally(words);
       const expected: WordScore[] = [{word: 'the', score: 3}];
       expect(JSON.stringify(wordScores)).toEqual(JSON.stringify(expected));
   });
});