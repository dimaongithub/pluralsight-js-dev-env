import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");

    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    console.log(dom.serialize());

    expect(dom.window.document.querySelector("h1").textContent).to.equal("Hello World!");
    done();
    });
})
