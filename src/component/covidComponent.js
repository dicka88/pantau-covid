import { endpoint } from '../config/services.js'

class FooterComponent extends HTMLElement {
  constructor() {
    super()
  }

  async connectedCallback() {
    this.render()
    const stat = await fetch(endpoint.covid.id)
    const json = await stat.json()

    this.querySelector('').textContent =
    this.querySelector('').textContent =
    this.querySelector('').textContent =
  }

  render() {
    this.innerHTML = `
      <div class="">

      </div>
    `
  }
}

customEelements.define('covid-component', FooterComponent)
