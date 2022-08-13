import { getUniqId } from 'src/common/helpers/id';
import { insertTemplateIntoHead } from 'src/common/helpers/template';
import style from './index.scss';
import getIndexTemplateHtml from './index.hbs';

const id = getUniqId('logo');
const indexTemplateHtml = getIndexTemplateHtml({ id, style });

const indexTemplate = insertTemplateIntoHead(indexTemplateHtml);

export default class Logo extends HTMLElement {
  constructor(...args) {
    super(...args);

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(indexTemplate.content.cloneNode(true));
  }
}

export const TEMPLATE_ID = id;
