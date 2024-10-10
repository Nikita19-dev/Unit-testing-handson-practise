import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';
import sinon from 'sinon'; 
import { Router } from '@vaadin/router';

describe('customer details', () => {
  // Write test cases inside this block

  let element;
  beforeEach(async () => {
    element = await fixture(html`<customer-details></customer-details>`);
  });


  afterEach(() => {
    sinon.restore();
  });

  it('should handle validation errors correctly', async () => {
    const firstNameInput = element.shadowRoot.querySelector('#first_name');
    firstNameInput.value = 'AB'; // Invalid input
    firstNameInput.dispatchEvent(new Event('input'));
  
    const submitButton = element.shadowRoot.querySelector('#nextbtn');
    submitButton.click(); 
    await element.updateComplete;
    expect(firstNameInput.classList.contains('error-handle')).to.be.true;
});


it('navigates to EMI details page when  clicked ', async () => {
  const el = await fixture(html`<customer-details></customer-details>`);
  const continueButton = el.shadowRoot.querySelector('.backbg-btn-color');

  const navigateSpy = sinon.spy(Router, 'go');

  continueButton.click(); 
  expect(navigateSpy).to.have.been.calledWith('/emidetails');
  navigateSpy.restore(); 
});

})
