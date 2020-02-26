import { LitElement, html, css } from "lit-element";

class MyElement extends LitElement {
  static get styles() {
    return css`
      p {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array }
    };
  }
  
  constructor() {
    super();
    this.message = "Hello world! From my-element";
    this.myBool = true;
    this.myArray = ["an", "array", "of", "test", "data"];
  }

  clickHandler(event) {
    this.myBool = !this.myBool;
  }

  render() {
    return html`
      <p class="${this.myBool ? 'red' : 'blue' }">styled paragraph</p>
      <p>${this.message}</p>
      <ul>${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
      
      ${this.myBool ?
        html`<p>Render some HTML if myBool is true</p>` :
        html`<p>Render some other HTML if myBool is false</p>`}

      <button @click=${this.clickHandler}>Click</button>
    `;
  }
}
customElements.define("my-element", MyElement);
