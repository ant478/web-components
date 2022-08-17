import {
  getUniqId,
  insertTemplateIntoHead
} from 'src/common/helpers';
import styles from './styles.scss';
import template from './template.hbs';

const id = getUniqId('logo');
const html = template({ id, styles });

insertTemplateIntoHead(html);

export class Logo extends HTMLElement {
  constructor(...args) {
    super(...args);

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(document.getElementById(id).content.cloneNode(true));
  }
}
