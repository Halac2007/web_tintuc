const province = document.querySelector('#binhdinh')
const tooltip = document.querySelector('#tooltip')

const popperInstance = Popper.createPopper(province, tooltip, {
  placement: 'top',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, -10],
      },
    },
  ],
})

const show = ({ refElement, title, content }) => {
  // Make the tooltip visible
  tooltip.setAttribute('data-show', '')

  // Update content
  tooltip.querySelector('.tooltip-content').innerHTML = title
  tooltip.querySelector('.tooltip-desc').innerHTML = content

  // Update reference element
  if (refElement) {
    popperInstance.state.elements.reference = refElement
  }

  // Enable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [...options.modifiers, { name: 'eventListeners', enabled: true }],
  }))

  // Update its position
  popperInstance.update()
}

const hide = () => {
  // Hide the tooltip
  tooltip.removeAttribute('data-show')

  // Disable the event listeners
  popperInstance.setOptions((options) => ({
    ...options,
    modifiers: [...options.modifiers, { name: 'eventListeners', enabled: false }],
  }))
}

document.addEventListener('mouseover', (e) => {
  // Hide popup when mouse out the map
  const outsideTooltip = !e.target.closest('#tooltip')
  if (outsideTooltip) hide()

  const provinceElement = e.target.closest('g')
  if (!provinceElement) {
    return
  }

  const provinceName = provinceElement.querySelector('title')?.innerHTML || 'Chưa có thông tin'
  const provinceContent = provinceElement.querySelector('desc')?.innerHTML || 'Chưa có thông tin'

  show({
    refElement: provinceElement,
    title: provinceName,
    content: provinceContent,
  })
})
