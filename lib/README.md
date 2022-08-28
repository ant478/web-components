# ant478 Web Components

My experiments with web components.

## Installation
```
npm i @ant478/web-components
```

## Usage
```
// index.js
// importing and defining custom element

import { Logo } from '@ant478/web-components';

if (!customElements.get('ant478-logo')) {
    customElements.define('ant478-logo', Logo);
}

// index.html
// using it in html

<ant478-logo></ant478-logo>
```

For components list and configuration options see storybook - https://ant478-web-components.herokuapp.com/
