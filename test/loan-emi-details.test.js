import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import sinon from 'sinon'; 
import {  localize } from '@lion/localize';
import { Router } from '@vaadin/router';

describe('Loan EMI details', () => {
  // Write test cases inside this block
   const mockData = {
    interestRate: 2,
    monthlyEMI: 2000,
    principal: 30000,
    interest: 4000,
    totalAmount: 50000,
  };
  beforeEach(() => {
    localStorage.setItem('emi', JSON.stringify(mockData));
    localize.locale = 'en-GB'; 
  });
  afterEach(() => {
    localStorage.clear(); // Clear localStorage after each test
  });


  it('navigates to the Basic Details page when the cancel button is clicked', async () => {
    const el = await fixture(html`<loanemi-details></loanemi-details>`);
    const cancelButton = el.shadowRoot.querySelector('.cancel-btn');

    const navigateSpy = sinon.spy(Router, 'go'); 
    cancelButton.click(); //
    expect(navigateSpy).to.have.been.calledWith('/details'); 

    navigateSpy.restore(); 
  });

  it('navigates to the Customer page when the continue button is clicked', async () => {
    const el = await fixture(html`<loanemi-details></loanemi-details>`);
    const continueButton = el.shadowRoot.querySelector('.continue-btn');

    const navigateSpy = sinon.spy(Router, 'go');

    continueButton.click(); 
    expect(navigateSpy).to.have.been.calledWith('/customer');
    navigateSpy.restore(); 
  });

});
