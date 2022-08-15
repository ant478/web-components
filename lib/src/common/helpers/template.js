export function insertTemplateIntoHead(templateHtml) {
  document.head.insertAdjacentHTML('beforeend', templateHtml.trim());
}
