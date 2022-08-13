export function getUniqId(prefix) {
  let id;

  do id = `${prefix}-${Math.random().toString(16).slice(2)}`;
  while (document.getElementById(id));

  return id;
}
