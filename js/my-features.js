const pinnedState = {}

function positionPopup(btn, popup) {
  popup.style.display = 'block'
  popup.style.top = 'auto'
  popup.style.bottom = 'auto'
  const rectBtn = btn.getBoundingClientRect()
  const popupHeight = popup.offsetHeight
  const spaceAbove = rectBtn.top
  const spaceBelow = window.innerHeight - rectBtn.bottom

  if (spaceAbove > popupHeight) {
    popup.style.bottom = '120%'
  } else {
    popup.style.top = '120%'
  }

  const container = document.querySelector('.container')
  const containerRect = container.getBoundingClientRect()
  const btnCenter = rectBtn.left + rectBtn.width / 2
  let desiredLeft = btnCenter - popup.offsetWidth / 2
  if (desiredLeft < containerRect.left) {
    desiredLeft = containerRect.left
  } else if (desiredLeft + popup.offsetWidth > containerRect.right) {
    desiredLeft = containerRect.right - popup.offsetWidth
  }
  const questionWrap = btn.parentElement
  const questionWrapRect = questionWrap.getBoundingClientRect()
  const relativeLeft = desiredLeft - questionWrapRect.left
  popup.style.left = relativeLeft + 'px'
  popup.style.transform = 'none'
}

document.querySelectorAll('.my-modal-btn').forEach(btn => {  
  const popupId = btn.getAttribute('data-target')
  pinnedState[popupId] = false
  const popup = document.querySelector(popupId)

  btn.addEventListener('mouseenter', () => {
    if (!pinnedState[popupId]) {
      positionPopup(btn, popup)
    }
  })

  btn.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!pinnedState[popupId]) {
        const insideButton = btn.matches(':hover')
        const insidePopup = popup.matches(':hover')
        if (!insideButton && !insidePopup) {
          popup.style.display = 'none'
        }
      }
    }, 100)
  })

  popup.addEventListener('mouseenter', () => {
    if (!pinnedState[popupId]) {
      positionPopup(btn, popup)
    }
  })

  popup.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!pinnedState[popupId]) {
        const insideButton = btn.matches(':hover')
        const insidePopup = popup.matches(':hover')
        if (!insideButton && !insidePopup) {
          popup.style.display = 'none'
        }
      }
    }, 100)
  })

  btn.addEventListener('click', e => {
    e.stopPropagation()
    if (!pinnedState[popupId]) {
      pinnedState[popupId] = true
      positionPopup(btn, popup)
    } else {
      pinnedState[popupId] = false
      popup.style.display = 'none'
    }
  })
})

document.addEventListener('click', e => {
  document.querySelectorAll('.my-popup').forEach(popup => {
    const id = '#' + popup.getAttribute('id')
    if (pinnedState[id]) {
      if (!popup.contains(e.target)) {
        pinnedState[id] = false
        popup.style.display = 'none'
      }
    }
  })
})

document.querySelectorAll('.my-popup-close').forEach(closeBtn => {
  closeBtn.addEventListener('click', e => {
    e.stopPropagation()
    const popup = closeBtn.closest('.my-popup')
    const id = '#' + popup.getAttribute('id')
    pinnedState[id] = false
    popup.style.display = 'none'
  })
})
