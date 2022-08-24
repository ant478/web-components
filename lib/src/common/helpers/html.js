export function insertHtmlIntoHead(html) {
  document.head.insertAdjacentHTML('beforeend', html.trim());
}
