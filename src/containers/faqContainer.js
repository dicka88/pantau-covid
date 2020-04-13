import content from '../constant/data.js'
class FAQContainer extends HTMLElement {
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
        .word {
          word-break: break-word;
        }
      </style>
      <div class="word">
        <h1 style="font-size: 40px">Pertanyaan seputar Covid-19</h1>
        ${content.content.rendered}
      </div>
    `
  }
}

customElements.define('faq-container', FAQContainer)
