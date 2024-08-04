document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion__item')

  accordionItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      document.body.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${item.getAttribute('data-bg')})
        center / cover
        #333
      `;
    })

    item.addEventListener('mouseleave', () => {
      document.body.style.background = ''
    })
  })
})
