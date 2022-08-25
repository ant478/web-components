import BaseAutonomousHTMLElement from 'src/common/classes/BaseAutonomousHTMLElement';
import { getUniqId } from 'src/common/helpers/id';
import { insertHtmlIntoHead } from 'src/common/helpers/html';
import styles from './styles.scss';
import render from './template';

const id = getUniqId('logo_base');
const html = render({ id, styles });
insertHtmlIntoHead(html);
const template = document.getElementById(id);

export class Logo extends BaseAutonomousHTMLElement {
  constructor(...args) {
    super(...args);

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(template.content.cloneNode(true));
  }

  static get styleRelatedAttributes() {
    return [
      'wc-fill-color',
      'wc-gear-spin-duration',
      'wc-background-color',
      'wc-head-fill-color',
      'wc-gear-fill-color',
      'wc-wrench-fill-color',
      'wc-hammer-fill-color',
      'wc-number-fill-color'
    ];
  }
}
