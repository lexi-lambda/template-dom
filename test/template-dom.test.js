import { expect } from 'chai';
import mkTemplateDom from '../src/template-dom.js';

const h = (tag, attrs, children) => ({ tag, attrs, children });

const D = mkTemplateDom(h);
const H = D.element;

describe('template-dom', () => {
  describe('element', () => {
    it('creates nodes', () => {
      expect(H('div') `this is a div`)
        .to.deep.equal(h('div', {}, ['this is a div']));
    });

    it('creates nodes with attributes', () => {
      expect(H('div')({ class: 'big' }) `this is a div`)
        .to.deep.equal(h('div', { class: 'big' }, ['this is a div']));
    });

    it('creates nodes with child nodes', () => {
      expect(H('div') `this is an ${H('strong') `important`} div`)
        .to.deep.equal(h('div', {}, [
          'this is an ', h('strong', {}, ['important']), ' div']));
    });
  });

  describe('div', () => {
    it('creates divs', () => {
      expect(D.div `this is a div`)
        .to.deep.equal(h('div', {}, ['this is a div']));
    });

    it('creates divs with attributes', () => {
      expect(D.div({ class: 'big' }) `this is a div`)
        .to.deep.equal(h('div', { class: 'big' }, ['this is a div']));
    });

    it('creates divs with child nodes', () => {
      expect(D.div `this is an ${D.strong `important`} div`)
        .to.deep.equal(h('div', {}, [
          'this is an ', h('strong', {}, ['important']), ' div']));
    });
  });
});
