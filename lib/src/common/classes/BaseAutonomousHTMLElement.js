export default class BaseAutonomousHTMLElement extends HTMLElement {
  #root;
  #customStyles;

  static get rootElementId() { return 'root'; }
  static get customStylesElementId() { return 'custom-styles'; }
  static get styleRelatedAttributes() { return []; }
  static get observedAttributes() {
    return [
      ...this.styleRelatedAttributes,
      'wc-custom-styles'
    ];
  }

  get root() {
    return (this.#root || (this.#root = this.shadowRoot.getElementById(this.constructor.rootElementId)));
  }
  get customStyles() {
    return (this.#customStyles || (this.#customStyles = this.shadowRoot.getElementById(this.constructor.customStylesElementId)));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.constructor.styleRelatedAttributes.includes(name)) {
      this.root.style.setProperty(`--${name}`, newValue);
      return;
    }

    if (name === 'wc-custom-styles' && this.customStyles) {
      this.customStyles.innerHTML = newValue;
    }
  }
}
