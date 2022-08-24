// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from 'lit-html';
import { Footer } from '../index';

customElements.define('ant478-footer', Footer);

export default {
  title: 'Footer',
  decorators: [(story) => html`<div>${story()}</div>`]
};

export const Base = () => html`<ant478-footer></ant478-footer>`;
