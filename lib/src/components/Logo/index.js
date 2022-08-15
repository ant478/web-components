import { getUniqId } from 'src/common/helpers/id';
import { insertTemplateIntoHead } from 'src/common/helpers/template';
import styles from './styles.scss';
import getIndexTemplateHtml from './template.hbs';

const id = getUniqId('logo');
const indexTemplateHtml = getIndexTemplateHtml({ id, styles });

insertTemplateIntoHead(indexTemplateHtml);

export default class Logo extends HTMLElement {
  constructor(...args) {
    super(...args);

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(document.getElementById(id).content.cloneNode(true));
  }
}
