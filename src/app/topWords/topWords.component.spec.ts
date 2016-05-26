import {
  it,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import WordTallyService from '../services/wordTally.service';
import { MockBackend } from '@angular/http/testing';
import { provide } from '@angular/core';
import { TopWordsComponent } from './topWords.component';

describe('TopWordsComponent', () => {
  beforeEachProviders(() => [
    TopWordsComponent,
    WordTallyService,
    provide(WordTallyService, {
      useFactory: function useFactory() {
        return new WordTallyService();
      }
    })
  ]);

  it('should have an title', inject([TopWordsComponent], (app: TopWordsComponent) => {
    expect(app.title).toEqual('Word frequencies');
  }));
  
  it('should have text set', inject([TopWordsComponent], (app: TopWordsComponent) => {
    expect(app.text).toEqual('Pride and Prejudice, by Jane Austen');
  }));

});