/**
 * TODO: Import the LitElement base class and html helper function.
 */
import { LitElement, html } from 'lit-element';

/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
class MyElement extends LitElement { 
  render() {
    return html`
      <p>Hello world! From my-element</p>
    `;
  }
}    

/**
 * TODO: Register the new element with the browser.
 */
customElements.define('my-element', MyElement);