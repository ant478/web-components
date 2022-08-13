const dummy = document.createElement('template');

export function insertTemplateIntoHead(templateHtml) {
  dummy.innerHTML = templateHtml.trim();

  document.head.appendChild(dummy.firstChild);

  return dummy.firstChild;
}
