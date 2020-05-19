class ArticleCardComponent extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .bg-color {
          background-color: #2e343b;
        }
        .column {
          display: flex;
          flex-direction: column;
        }
        .p-1 {
          padding: 1em;
        }
        .mb-1 {
          margin-bottom: 1em;
        }
        .round-7 {
          border-radius: 7px;
        }
        a {
          text-decoration: none;
          color: white;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        .space-between {
          justify-content: space-between;
        }
        .align-center {
          align-items: center;
        }
        .border-white {
          border: 1px solid white;
        }
        .circle {
          border-radius: 50%;
        }
        .bg-white {
          background-color: white;
        }
      </style>
      <article class="column bg-color round-7 p-1 mb-1">
        <a target="_blank" rel="noopener norefferer" href="https://alodokter.com/virus-corona">
          <header>
            <h2>Virus Corona (COVID-19) - Gejala, penyebab dan mengobati ...</h2>
          </header>
          <section>
            <p>Apabila Anda ingin mendapatkan lebih banyak informasi tentang gejala, pencegahan, dan fakta tentang virus Corona, silakan download aplikasi ...</p>
          </section>
          <footer>
            <div class="row space-between align-center" style="font-size: 15px;">
              <div class="row center">
                <img class="border-white circle bg-white" style="width: 25px;" src="favicon.png" alt="">
                <span style="margin-left: 12px;">Info covid-19</span>
              </div>
              <span>03 Maret 2020</span>
            </div>
          </footer>
        </a>
      </article>
    `
  }
}

customElements.define('article-card-component', ArticleCardComponent)
