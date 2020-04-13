// when hash changes
// name hash and name component
const routes = {
  '': 'home-container',
  '/': 'home-container',
  '/faq': 'faq-container',
  '/informasi': 'information-container',
  '/hotline': 'hotline-container',
  '/wilayah': 'wilayah-container',
  '/global': 'global-container',
  '/error': 'error-container'
}

const main = document.querySelector('main')
const initRoute = () => {
  const hash = location.hash.substr(1)
  main.innerHTML = (routes[hash]) ? `<${routes[hash]} />` : `<${routes['/error']} />`
}

window.addEventListener('hashchange', (e) => {
  initRoute()
  window.scrollTo(0, 0)
})

initRoute()
