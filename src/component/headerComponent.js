import logo from '../images/pantau.png'
class HeaderComponent extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
    this.handleScroll()
    this.switchColor()
    this.handleNavigation()
  }
  storageTheme() {
    const theme = localStorage.getItem('theme')
    if(!theme) {
      localStorage.setItem('theme', 'light')
    }
    return theme
  }
  switchColor() {
    const metaThemeColor = document.head.querySelector('meta[name=theme-color]')
    if(this.storageTheme() == 'dark') {
      document.body.classList.toggle('dark')
      metaThemeColor.setAttribute('content', '#1A1616')
    } else {
      metaThemeColor.setAttribute('content', '#fff')
    }

    const switchDark = this.querySelector('#switch')
    switchDark.addEventListener('click', () => {
      localStorage.setItem('theme', this.storageTheme() == 'dark' ? 'light' : 'dark')
      metaThemeColor.setAttribute('content', this.storageTheme() == 'dark' ? '#1A1616' : '#fff')
      document.body.classList.toggle('dark')
    })
  }
  handleScroll() {
    window.addEventListener('scroll',() => {
      const headerClass = this.classList
      if(window.scrollY > 100) {
        headerClass.add('bottom-shadow')
      } else {
        headerClass.remove('bottom-shadow')
      }
    })
  }
  handleNavigation() {
    const vm = this
    this.querySelectorAll('nav a').forEach(function(e) {
      const url = location.hash
      const link = e.getAttribute('href')
      if(url == link) e.classList.add('active')
      if(url == '') vm.querySelector('nav a').classList.add('active')
      e.addEventListener('click', () => {
        // remove active class
        const activeNav = vm.querySelector('nav a.active')
        activeNav && activeNav.classList.remove('active')
        // add active class
        e.classList.add('active')
      })
    })
  }
  render() {
    this.innerHTML = `
      <div style="display: flex; justify-content: flex-start;">
        <a href="#/">
          <img src="${logo}" style="width: 9em; height: 3em;" alt="icon covid">
        </a>
        <div class="nav-wrapper" style="flex: 1; margin-left: 2em;">
          <nav>
            <a class="" href="#/" >Beranda</a>
            <a class="" href="#/faq">FAQ</a>
            <a class="" href="#/informasi">Informasi</a>
            <a class="" href="#/hotline">Hotline</a>
            <a class="" href="#/wilayah">Wilayah</a>
            <a class="" href="#/global">Global</a>
          </nav>
        </div>
      </div>
      <div style="display: flex; flex-direction: row; align-items: center;" class="">
        <span>Mode warna</span>
        <button id="switch" style="display: flex; flex-direction: row; outline: none; cursor: pointer; color: white; background-color: transparent; border: none;" type="button">
          <div style="border-radius: 16px 0 0 16px; padding: 8px; background-color: black;" class="">
            <span>Gelap</span>
          </div>
          <div style="border-radius: 0 16px 16px 0; padding: 8px; background-color: #d8232a;" class="">
            <span>Terang</span>
          </div>
        </button>
      </div>
    `
  }
}

customElements.define('header-component', HeaderComponent)
