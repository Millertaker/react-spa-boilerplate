import {JSDOM} from 'jsdom';

module export function(markup){
  if (typeof document !== 'undefined') return;
  const dom = new JSDOM(`<!DOCTYPE html><body>${markup}</body>`);
  return dom.window.document;
}