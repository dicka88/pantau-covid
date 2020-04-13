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
        article-card-component {
          width: 49.2%;
        }
        .flex-wrap {
          display: flex;
          flex-wrap: wrap;
        }
        .space-between {
          justify-content: space-between;
        }
        @media only screen and (max-width: 768px) {
          article-card-component {
            width: 100% !important;
          }
        }
      </style>
      <div>
        <h1>Informasi terkait Covid-19</h1>
        <div class="flex-wrap space-between">
          <article-card-component></article-card-component>
          <article-card-component></article-card-component>
          <article-card-component></article-card-component>
          <article-card-component></article-card-component>
          <article-card-component></article-card-component>
          <article-card-component></article-card-component>
        </div>
      </div>
    `
  }
}

customElements.define('information-container', InformationContainer)
