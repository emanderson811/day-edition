document.addEventListener('DOMContentLoaded', function () {
  const annotations = Array.isArray(window.ANNOTATIONS) ? window.ANNOTATIONS : [];
  const lookup = {};
  annotations.forEach(row => {
    if (row.id) lookup[row.id] = row.text;
  });

  document.querySelectorAll('.pop-annotation').forEach(el => {
    const id = el.getAttribute('id');
    if (!id || !lookup[id]) return;
    new bootstrap.Popover(el, {
      content: lookup[id],
      trigger: 'focus',
      placement: 'auto',
      html: true,
    });
    el.classList.add('ann-target');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  });
});