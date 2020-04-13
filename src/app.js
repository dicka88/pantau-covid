import 'regenerator-runtime'

// css
import './styles/global.css'

// load vendor
import './vendor/fontAwesome.js'

// load component
import './component/selectComponent.js'
import './component/bottomNavbarComponent.js'
import './component/articleCardComponent.js'
import './component/headerComponent.js'
import './component/footerComponent.js'

// load containers / pages
import './containers/homeContainer.js'
import './containers/faqContainer.js'
import './containers/informationContainer.js'
import './containers/hotlineContainer.js'
import './containers/wilayahContainer.js'
import './containers/globalContainer.js'
import './containers/errorContainer.js'

// route
import './config/route.js'

// service worker registration
if('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js')
      console.log('Sw success registered');
    } catch(e) {
      console.error('sw failed')
    }
  })
}
