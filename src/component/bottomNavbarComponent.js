class BottomNavbar extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
    this.handleListener()
  }
  handleListener() {
    this.querySelectorAll('.wrapper-item').forEach(e => {
      const url = location.hash
      const link = e.getAttribute('href')
      if(url == link) e.classList.add('active')
      if(url == '') this.querySelector('.wraper-item').classList.add('active')

      e.addEventListener('click', () => {
        const active =  this.querySelector('.wrapper-item.active')
        active && active.classList.remove('active')
        e.classList.add('active')
      })
    })
  }
  render() {
    this.innerHTML = `
      <style>
        .navbar {
          width: 100%;
          height: 4em;
        }
        .navbar.bottom {
          position: absolute;
          bottom: 0;
          background-color: white;
          border-top: 1px solid #e8e8e8;
          align-items: center;
        }
        .dark .navbar.bottom {
          border-top: 1px solid #e8e8e8;
          background-color: #1A1616;
        }
        .wrapper-item {
          flex: 1;
          height: 4em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: black;
        }
        .wrapper-item > span {
          font-size: 15px;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        .wrapper-item:hover, .wrapper-item.active {
          background-color: #e8e8e8;
        }
        .dark .wrapper-item:hover, .dark .wrapper-item.active {
          background-color: #3c3c3c;
        }
      </style>
      <div class="navbar bottom row">
        <a href="#/" class="wrapper-item">
          <i class="fas fa-home" style="font-size: 25px;"></i>
          <span>Home</span>
        </a>
        <a href="#/informasi" class="wrapper-item">
          <i class="fas fa-info-circle" style="font-size: 25px;"></i>
          <span>Informasi</span>
        </a>
        <a href="#/faq" class="wrapper-item">
          <i class="fas fa-home" style="font-size: 25px;"></i>
          <span>FAQ</span>
        </a>
        <a href="#/wilayah" class="wrapper-item">
          <i class="fas fa-home" style="font-size: 25px;"></i>
          <span>Wilayah</span>
        </a>
        <a href="#/global" class="wrapper-item">
          <i class="fas fa-globe" style="font-size: 25px;"></i>
          <span>Global</span>
        </a>
      </div>
    `
  }
}

customElements.define('bottom-navbar', BottomNavbar)
