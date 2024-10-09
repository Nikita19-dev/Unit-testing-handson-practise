import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';
import sinon from 'sinon'; 
import { localize } from '@lion/localize';


describe('loan-header', () => {
  // Write test cases inside this block
  beforeEach(() => {
    localize.locale = 'en-GB';
  });

  it('renders the header correctly', async () => {
    const el = await fixture(html`<loan-header></loan-header>`);

    const heading = el.shadowRoot.querySelector('p');
    const EButton= el.shadowRoot.getElementById('en-GB');
    const NButton = el.shadowRoot.getElementById('nl-NL');

    expect(heading).to.exist;
    expect(EButton).to.exist;
    expect(NButton).to.exist;
  });

});
