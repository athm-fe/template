import template from './template';

if (window.jQuery) {
  const $ = window.jQuery;
  $.fn.template = function (data, settings = {}) {
    const elem = this[0];
    const tpl = elem ? elem.innerHTML : '';
    const compiled = template(tpl, settings);

    if (data) {
      const html = compiled(data); 
      return $(html);
    } else {
      return compiled;
    }
  }
}

export default template;
