import { Injectable } from '@angular/core';
import { WordRank } from '../lib/wordRank';
import { text } from './pride_and_prejudice';

export interface WordScore {
    word: string;
    score: number;
}

@Injectable()
export default class WordTallyService {
    getTopWordRanks(limit?: number) {
        return Promise.resolve(text) //potentially perform http request for text
            .then(text => getTopWordRanks(text, limit));
    }
}

export function getTopWordRanks(text: string, limit?: number): WordRank[] {
    const wordRanks = transformWordScoresToWordRanks(
                        sortDescendingOrder(
                            tally(
                                splitText(text.toLocaleLowerCase()))));
                                
    const n = limit === undefined ? wordRanks.length : Math.min(wordRanks.length, limit);
    return normalise(wordRanks.slice(0, Math.min(wordRanks.length, n)));
}

export function normalise(wordRanks: WordRank[]) {
    const n = wordRanks.length;
    return wordRanks.map((wordRank, index) => (Object.assign({}, wordRank, {rank: n - index} )));
}

export function transformWordScoresToWordRanks(wordScores: WordScore[]): WordRank[] {
    const totalWords = wordScores.reduce(
        (total, wordScore) => total + wordScore.score,
        0);
    return wordScores.map(wordScore => ({ 
        word: wordScore.word, 
        rank: wordScore.score, 
        occurences: wordScore.score, 
        probability: wordScore.score/totalWords 
    }));
}

export function sortDescendingOrder(wordScores: WordScore[]): WordScore[] {
    return wordScores.sort((a, b) => b.score - a.score);
}

export function splitText(text: string) {
    return text.split(/[^\w]+/);
}

export function incrementWordScore(tally: Map<string, WordScore>, word: string): WordScore {
    const score = tally.has(word) ? tally.get(word).score+1 : 1;
    return { word, score }
}

export function tally(words: string[]): WordScore[] {
    const tallyMap = words.reduce(
            (tally, word) => tally.set(word, incrementWordScore(tally, word)),
            new Map<string, WordScore>());
            
     return Array.from(tallyMap.values());
}