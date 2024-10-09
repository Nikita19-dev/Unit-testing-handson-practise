import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  it('renders the LoanApplication component correctly', async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    expect(el).to.exist;
    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
    const dashboard = el.shadowRoot.querySelector('dash-board');
    expect(dashboard).to.exist;
  });
});

it('increments the counter correctly', async () => {
  const el = await fixture(html`<loan-application></loan-application>`);
  el.__increment();
  expect(el.counter).to.equal(6);
});
