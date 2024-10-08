import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block

  let element;
  beforeEach(async () => {
    element = await fixture(html`<customer-details></customer-details>`);
  });


  
});
