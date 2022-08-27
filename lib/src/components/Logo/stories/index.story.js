// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from 'lit-html';
import { Logo } from '../index';

customElements.define('ant478-logo', Logo);

export default {
  title: 'Logo',
  decorators: [(story) => html`<div style="height: 500px; width: 500px">${story()}</div>`]
};

export const Base = () => html`
  <div style="color: indigo">
    <ant478-logo></ant478-logo>
  </div>
`;

export const OriginalTheme = () => html`
  <ant478-logo wc-theme="original"></ant478-logo>
`;

export const AttributesConfigured1 = () => html`
  <ant478-logo
    wc-fill-color="#666567"
    wc-background-color="transparent"
    wc-gear-spin-duration="50s"
  ></ant478-logo>
`;

export const AttributesConfigured2 = () => html`
  <ant478-logo
    wc-background-color="#870000"
    wc-head-fill-color="#ffb700"
    wc-gear-fill-color="#9b6f00"
    wc-wrench-fill-color="#9b6f00"
    wc-hammer-fill-color="#9b6f00"
    wc-number-fill-color="#c51600"
    wc-gear-spin-duration="30s"
  ></ant478-logo>
`;

export const CssVariablesConfigured1 = () => html`
  <style>
    .logo::part(root) {
      --wc-fill-color: yellow;
      --wc-background-color: currentColor;
      --wc-gear-spin-duration: 10s;
    }
  </style>
  <ant478-logo class="logo"></ant478-logo>
`;

export const CssVariablesConfigured2 = () => html`
  <style>
    .logo::part(root) {
      --wc-background-color: #203e8c;
      --wc-head-fill-color: #ffffff;
      --wc-gear-fill-color: #ffffff;
      --wc-wrench-fill-color: #bbbbbb;
      --wc-hammer-fill-color: #bbbbbb;
      --wc-number-fill-color: #ffb700;
      --wc-gear-spin-duration: 5s;
    }
  </style>
  <ant478-logo class="logo"></ant478-logo>
`;

export const CustomStyles = () => html`
  <style>
    .logo {
      overflow: hidden;
    }
    .logo::part(logo) {
      color: #1c1c1c;
      background-image: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
      animation: custom-spin 18s ease infinite;
    }

    .logo::part(logo_head),
    .logo::part(logo_gear),
    .logo::part(logo_wrench),
    .logo::part(logo_hammer),
    .logo::part(logo_number) {
      animation: 18s infinite linear;
      transform-origin: center;
    }

    .logo::part(logo_head) {
      animation-name: spin3d-3;
      animation-direction: reverse;
    }
    .logo::part(logo_gear) {
      animation-name: spin3d-2;
    }
    .logo::part(logo_wrench) {
      animation-name: spin3d-4;
    }
    .logo::part(logo_hammer) {
      animation-name: spin3d-4;
      animation-direction: reverse;
    }
    .logo::part(logo_number__1) {
      animation-name: spin3d-2;
    }
    .logo::part(logo_number__2) {
      animation-name: spin3d-5;
    }
    .logo::part(logo_number__3) {
      animation-name: spin3d-4;
      animation-direction: reverse;
    }
  </style>
  <ant478-logo
    class="logo"
    wc-custom-styles="
        @keyframes custom-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin3d-2 {
          0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
          100% { transform: rotate3d(1, 1, 1, 720deg) rotate(360deg); }
        }
        @keyframes spin3d-3 {
          0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
          100% { transform: rotate3d(1, 1, 1, 1080deg) rotate(360deg); }
        }
        @keyframes spin3d-4 {
          0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
          100% { transform: rotate3d(1, 1, 1, 1440deg) rotate(360deg); }
        }
        @keyframes spin3d-5 {
          0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
          100% { transform: rotate3d(1, 1, 1, 1800deg) rotate(360deg); }
        }
    "
  ></ant478-logo>
`;
