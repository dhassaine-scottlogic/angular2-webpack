import {
  it,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import WordTallyService from '../services/wordTally.service';
import { MockBackend } from '@angular/http/testing';
import { provide } from '@angular/core';

// Load the implementations that should be tested
import { TopWordsComponent } from './topWords.component';

describe('TopWordsComponent', () => {
  // provide our implementations or mocks to the dependency injector
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

});