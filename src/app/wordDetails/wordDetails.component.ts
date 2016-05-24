import { Component, Input } from '@angular/core';
import { WordRank } from '../lib/wordRank';

@Component({
  selector: 'word-details',
  template: require('./wordDetails.html')
})

export class WordDetailsComponent {
  @Input()
  details: WordRank
}
