/**
 * 判断dom元素实际内容是否超出展示内容
 * @param el dom元素（不能是inline元素）
 */
export const isElementTextOverflow = (el: HTMLElement) => {
  const range = document.createRange();
  range.setStart(el, 0);
  range.setEnd(el, el.childNodes.length);
  const rangeWidth = Math.floor(range.getBoundingClientRect().width || 0);
  return rangeWidth > el.offsetWidth || el.scrollWidth > el.offsetWidth;
};
