import API from '../config/services.js'
class GlobalContainer extends HTMLElement {
  connectedCallback() {
    this.render()
    // this.handleContent()
  }
  async handleContent() {
    const image_api = endpoint.covid.global.image
  }
  render() {
    this.innerHTML = `
      <div>
        <label>Cari negara</label>
        <select-component></select-component>
        <img style="width: 100%;" src=${API.endpoint.covid.global.image} />
      </div>
    `
  }
}

customElements.define('global-container', GlobalContainer)
