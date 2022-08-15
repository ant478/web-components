// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from 'lit-html';
import Logo from '../index';

customElements.define('ant478-logo', Logo);

export default {
  title: 'Logo',
  decorators: [(story) => html`<div style="height: 500px; width: 500px">${story()}</div>`]
};

export const Base = () => html`<ant478-logo></ant478-logo>`;
