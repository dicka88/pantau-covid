import API from '../config/services.js'
class GlobalContainer extends HTMLElement {
  connectedCallback() {
    this.render()
    this.handleSelect()
  }
  async handleSelect() {
    const countries = await fetch(API.endpoint.covid.global.countries)
    const result = await countries.json()
    const allCountries = result.countries.map(e => ({
      name: e.name,
      value: e.name
    }))
    const customSelect = this.querySelector('select-component')

    customSelect.item = allCountries
    customSelect.onChange = () => {
      const selected = customSelect.value
      const imageElement = this.querySelector('img')
      if(selected === 'Semua') {
        imageElement.setAttribute('src', API.endpoint.covid.global.image)
      } else {
        imageElement.setAttribute('src', API.endpoint.covid.global.imagePattern.replace('[country]', selected))
      }
    }
  }
  render() {
    this.innerHTML = `
      <style>
        .image {
          width: 100%; 
          border-radius: 8px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      </style>
      <div>
        <label>Cari negara</label>
        <select-component></Select-component>
        <img class="image" src=${API.endpoint.covid.global.image} />
      </div>
    `
  }
}

customElements.define('global-container', GlobalContainer)
