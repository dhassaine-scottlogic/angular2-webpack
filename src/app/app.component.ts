import { Component } from '@angular/core';
import { TopWordsComponent } from './topWords/topWords.component';
import { WordDetailsComponent } from './wordDetails/wordDetails.component'
import WordTallyService from './services/wordTally.service';
import { WordRank } from './lib/wordRank';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  template: require('./app.component.html'),
  directives: [TopWordsComponent, WordDetailsComponent],
  providers: [WordTallyService]
})
export class AppComponent {
    public selectedWordRank: WordRank;
    
    selectWordRank(wordRank: WordRank) {
        this.selectedWordRank = wordRank;
    }    
}