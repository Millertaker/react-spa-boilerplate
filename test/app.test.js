import React from 'react';
import chai from 'chai';
import {assert} from 'chai';
import {renderIntoDocument} from 'react-dom/test-utils';
import App from '../src/components/App';


describe('Test components/App Component', () => {
  it('Should render', () => {

     const item = renderIntoDocument(
      <App />
    );

    assert.isNotNull(item, ['the App object is not null'])
  });
});

