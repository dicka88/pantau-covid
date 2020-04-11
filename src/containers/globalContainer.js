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
        <img style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" src=${API.endpoint.covid.global.image} />
      </div>
    `
  }
}

customElements.define('global-container', GlobalContainer)
