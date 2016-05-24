import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WordRank } from '../lib/wordRank';
import WordTallyService from '../services/wordTally.service';

@Component({
  selector: 'top-words',
  template: require('./topWords.component.html'),
  styles: [require('./topWords.component.css')]
})

export class TopWordsComponent {
  public title: string = 'Word frequencies';
  public text: string = 'Pride and Prejudice, by Jane Austen';
  public topWords: WordRank[] = [];
  public selectedWordRank: WordRank;
  
  constructor(private wordTallyService: WordTallyService) {}
  
  ngOnInit() {
    this.getTopWordRanks();
  }
  
  getTopWordRanks() {
    this.wordTallyService.getTopWordRanks(10)
      .then(topWordRanks => this.topWords = topWordRanks);
  }
  
  @Output()
  onSelect = new EventEmitter<WordRank>();
  
  select(wordRank: WordRank) { 
    this.selectedWordRank = wordRank; 
    this.onSelect.emit(this.selectedWordRank);
  }
}
