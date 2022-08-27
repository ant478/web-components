// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from 'lit-html';
import { Footer } from '../index';

customElements.define('ant478-footer', Footer);

export default {
  title: 'Footer',
  decorators: [(story) => html`<div>${story()}</div>`]
};

export const Base = () => html`<ant478-footer></ant478-footer>`;

export const AttributesConfigured = () => html`
  <ant478-footer
    wc-text-color="#373737"
    wc-nickname-text-color="mediumpurple"
    wc-background-color="blanchedalmond"
    wc-icon-fill-color="lightslategray"
    wc-icon-fill-color-hover="darkslategray"
    wc-selection-background-color="#373737"
    wc-selection-text-color="mediumpurple"
  ></ant478-footer>
`;

export const CssVariablesConfigured = () => html`
  <style>
    .footer::part(root) {
      --wc-text-color: #866666;
      --wc-nickname-text-color: #8d1700;
      --wc-background-color: #0f0f0f;
      --wc-icon-fill-color: #703e3e;
      --wc-icon-fill-color-hover: #9d2222;
      --wc-selection-background-color: var(--wc-text-color);
      --wc-selection-text-color: #151515;
    }
  </style>
  <ant478-footer class="footer"></ant478-footer>
`;
