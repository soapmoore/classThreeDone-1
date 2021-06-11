var tabs = document.querySelectorAll('nav a')
contentPara = document.querySelector('.content')

// tabs.forEach((tab) => tab.addEventListener('click', makeActive))

// function makeActive(event) {
//   if (!event.target.matches('nav a')) return
//   makeInactive()
//   event.target.classList.add('active')

//   if (event.target.href.includes('cuisines')) {
//     contentPara.innerHTML = data.cuisines
//   } else if (event.target.href.includes('chefs')) {
//     contentPara.innerHTML = data.chefs
//   } else if (event.target.href.includes('reviews')) {
//     contentPara.innerHTML = data.reviews
//   } else if (event.target.href.includes('delivery')) {
//     contentPara.innerHTML = data.delivery
//   }
// }

function makeActive(event) {
  if (!event.target.matches('a')) return
  makeInactive()
  event.target.classList.add('active')
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  contentPara.innerHTML = data[type]
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

// function initializePage() {
//   document.querySelector('nav a').classList.add('active')
//   window.location.hash = 'cuisines'
//   setContentAccordingToHash()
// }

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines'
    document.querySelector('[href="#cuisines"]').classList.add('active')
  } else {
    document
      .querySelector(`[href="${window.location.hash}]"`)
      .classList.add('active')
  }
  setContentAccordingToHash()
}

document.addEventListener('click', makeActive)
window.addEventListener('hashchange', setContentAccordingToHash)

initializePage()
