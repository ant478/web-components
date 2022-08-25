export default class BaseAutonomousHTMLElement extends HTMLElement {
  #root;

  static get rootElementId() { return 'root'; }
  static get styleRelatedAttributes() { return []; }
  static get observedAttributes() {
    return [
      ...this.styleRelatedAttributes
    ];
  }

  get root() {
    return (this.#root || (this.#root = this.shadowRoot.getElementById(this.constructor.rootElementId)));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.constructor.styleRelatedAttributes.includes(name)) {
      this.root.style.setProperty(`--${name}`, newValue);
    }
  }
}
