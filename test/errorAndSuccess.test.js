import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import sinon from 'sinon'; 
import { Router } from '@vaadin/router';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('display the success message correctly', async () => {
    const el = await fixture(html`<loan-success></loan-success>`);

    const title = el.shadowRoot.querySelector('h2');
    const description = el.shadowRoot.querySelector('p');
    const button = el.shadowRoot.querySelector('lion-button');

    expect(title).to.exist;
    expect(description).to.exist;
    expect(button).to.exist;
   
  });

  it('navigates to home when the  button is clicked', async () => {
    const el = await fixture(html`<loan-success></loan-success>`);
    const button = el.shadowRoot.querySelector('lion-button');
  
    const navigateSpy = sinon.spy(Router, 'go');
  
    button.click();
    expect(navigateSpy).to.have.been.calledWith('/');
  
    navigateSpy.restore();
  });

});

describe('error screen', () => {
  it('displaying the error message correctly', async () => {
    const el = await fixture(html`<loan-error></loan-error>`);

    const title = el.shadowRoot.querySelector('h2');
    const description = el.shadowRoot.querySelector('p');
    const button = el.shadowRoot.querySelector('lion-button');
    expect(title).to.exist;
    expect(description).to.exist;
    expect(button).to.exist;
});






it('navigates to home when the  home button is clicked', async () => {
  const el = await fixture(html`<loan-error></loan-error>`);
  const button = el.shadowRoot.querySelector('lion-button');

  const navigateSpy = sinon.spy(Router, 'go');

  button.click();
  expect(navigateSpy).to.have.been.calledWith('/');

  navigateSpy.restore();
});

})