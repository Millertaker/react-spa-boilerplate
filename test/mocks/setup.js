import {JSDOM} from 'jsdom';

var dom = new JSDOM(`<!DOCTYPE html><html><body> </body></html>`);

global.window = dom.window;
global.document = window.document;

global.navigator = {userAgent: 'node.js'};

