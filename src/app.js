import 'regenerator-runtime'
// load vendor
import './vendor/fontAwesome.js'

// load component
import './component/selectComponent.js'
import './component/bottomNavbarComponent.js'
import './component/headerComponent.js'
import './component/footerComponent.js'
// load containers / pages
import './containers/homeContainer.js'
import './containers/hotlineContainer.js'
import './containers/faqContainer.js'
import './containers/wilayahContainer.js'
import './containers/globalContainer.js'
import './containers/errorContainer.js'

import './config/route.js'

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
