import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { BasicDetails } from '../src/LoanBasicDetails/BasicDetails.js';
import sinon from 'sinon'; // Import Sinon


describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
   let element;
 

  
   beforeEach(async () => {
    element = await fixture(html`<basic-details></basic-details>`);
  });
   


   it('should initialize with default values provided', () => {
    expect(element.amount).to.equal(10000);
    expect(element.range).to.equal(2);
  });
 
  it('should enter an amount greater than ten thousand' , ()=>{
    element.amount = 100000; 
    expect(element.amount).to.be.greaterThan(10000);
  });
});
