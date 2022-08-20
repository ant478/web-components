import { getUniqId } from 'src/common/helpers/id';
import { insertTemplateIntoHead } from 'src/common/helpers/template';
import styles from './styles.scss';
import render from './template';

const id = getUniqId('logo_base');
const html = render({ id, styles });
insertTemplateIntoHead(html);
const template = document.getElementById(id);

export class Logo extends HTMLElement {
  #root;
  get root() {
    return (this.#root || (this.#root = this.shadowRoot.getElementById('root')));
  }

  constructor(...args) {
    super(...args);

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'wc-gear-spin-duration',
      'wc-fill-color'
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'wc-gear-spin-duration':
      case 'wc-fill-color':
        this.root.style.setProperty(`--${name}`, newValue);
        break;
      default:
        break;
    }
  }
}
