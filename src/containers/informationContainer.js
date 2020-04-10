import content from '../constant/data.js'
class InformationContainer extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <style>
        img {
          width: 100%;
        }
        a {
          text-decoration: underline;

        }
      </style>
      ${content.content.rendered}
    `
  }
}

customElements.define('information-container', InformationContainer)
