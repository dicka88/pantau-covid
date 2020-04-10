class FooterComponent extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <div style="display: flex; border-top: 1px solid #999999; padding: 2em 0 6em 0;" class="">
        <div class="" style="flex: 1;">
          <span>Aplikasi submission dicoding</span>
          <span>dibuat dengan ❤ dan ☕</span>
        </div>
        <div class="" style="flex: 1; flex-direction: row; display: flex; justify-content: center;">
          <style media="screen">
            .link {
              text-decoration: none;
              font-size: 20px;
              margin: 0 12px;
              color: black;
            }
          </style>
          <a href="https://instagram.com/@dickaismaji" target="_blank" class="link"><i class="fab fa-instagram"></i></a>
          <a href="https://facebook.com/dickha.itsmadjie" target="_blank" class="link"><i class="fab fa-facebook-f"></i></a>
          <a href="https://github.com/dicka88" target="_blank" class="link"><i class="fab fa-github"></i></a>
        </div>
        <div class="" style="flex: 1; display: flex; justify-content: flex-end">
          <span>Ketahui lebih lanjut</span>
        </div>
      </div>
    `
  }
}

customElements.define('footer-component', FooterComponent)
