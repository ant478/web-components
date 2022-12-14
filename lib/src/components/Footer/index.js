import BaseAutonomousHTMLElement from 'src/common/classes/BaseAutonomousHTMLElement';
import { getUniqId } from 'src/common/helpers/id';
import { insertHtmlIntoHead } from 'src/common/helpers/html';
import styles from './styles.scss';
import render from './template.hbs';
import {
  NICKNAME,
  LEFT_SIDE_ICONS,
  RIGHT_SIDE_ICONS
} from './config';

const id = getUniqId('footer_base');
const html = render({
  id,
  styles,
  nickname: NICKNAME,
  leftSideIcons: LEFT_SIDE_ICONS,
  rightSideIcons: RIGHT_SIDE_ICONS
});

insertHtmlIntoHead(html);
const template = document.getElementById(id);

export class Footer extends BaseAutonomousHTMLElement {
  constructor(...args) {
    super(...args);

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(template.content.cloneNode(true));
  }

  static get styleRelatedAttributes() {
    return [
      'wc-text-color',
      'wc-nickname-text-color',
      'wc-background-color',
      'wc-icon-fill-color',
      'wc-icon-fill-color-hover',
      'wc-selection-background-color',
      'wc-selection-text-color'
    ];
  }
}
