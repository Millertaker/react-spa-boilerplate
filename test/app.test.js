import chai from 'chai';
import {JSDOM} from 'jsdom';

describe('This is my bolierplate test', () => {
  it('Should exists as object', () => {

    let inputDOMMarkup = htmlMocks.textInput;
    const dom = new JSDOM(`<!DOCTYPE html><body>${inputDOMMarkup}</body>`);

    dom.window.document.DataGenerator = DataGenerator.getInstance();
    let input = Input({selector: 'text-input-component-js', document: dom.window.document});

    assert.equal(typeof input,  'object', 'the returned value is a Object');
  });
});

