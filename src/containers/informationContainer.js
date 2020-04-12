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
      <div>
        <h1>Informasi terkait Covid-19</h1>
        <div style="display: flex; flex-wrap: wrap;">
          <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em; margin-bottom: 1em;">
            <a target="_blank" style="text-decoration: none; color: white;" href="https://alodokter.com/virus-corona">
              <header>
                <h2>Virus Corona (COVID-19) - Gejala, penyebab dan mengobati ...</h2>
              </header>
              <section>
                <p>Apabila Anda ingin mendapatkan lebih banyak informasi tentang gejala, pencegahan, dan fakta tentang virus Corona, silakan download aplikasi ...</p>
              </section>
              <footer>
                <div class="" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 15px;">
                  <div class="" style="display: flex; flex-direction: row; align-items: center;">
                    <img style="border-radius: 50%; border: 1px solid white; width: 25px; background-color: white;" src="favicon.png" alt="">
                    <span style="margin-left: 12px;">Info covid-19</span>
                  </div>
                  <span>03 Maret 2020</span>
                </div>
              </footer>
            </a>
          </article>
          <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em; margin-bottom: 1em;">
            <a target="_blank" style="text-decoration: none; color: white;" href="https://alodokter.com/virus-corona">
              <header>
                <h2>Virus Corona (COVID-19) - Gejala, penyebab dan mengobati ...</h2>
              </header>
              <section>
                <p>Apabila Anda ingin mendapatkan lebih banyak informasi tentang gejala, pencegahan, dan fakta tentang virus Corona, silakan download aplikasi ...</p>
              </section>
              <footer>
                <div class="" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 15px;">
                  <div class="" style="display: flex; flex-direction: row; align-items: center;">
                    <img style="border-radius: 50%; border: 1px solid white; width: 25px; background-color: white;" src="favicon.png" alt="">
                    <span style="margin-left: 12px;">Info covid-19</span>
                  </div>
                  <span>03 Maret 2020</span>
                </div>
              </footer>
            </a>
          </article>
          <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em; margin-bottom: 1em;">
            <a target="_blank" style="text-decoration: none; color: white;" href="https://alodokter.com/virus-corona">
              <header>
                <h2>Virus Corona (COVID-19) - Gejala, penyebab dan mengobati ...</h2>
              </header>
              <section>
                <p>Apabila Anda ingin mendapatkan lebih banyak informasi tentang gejala, pencegahan, dan fakta tentang virus Corona, silakan download aplikasi ...</p>
              </section>
              <footer>
                <div class="" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 15px;">
                  <div class="" style="display: flex; flex-direction: row; align-items: center;">
                    <img style="border-radius: 50%; border: 1px solid white; width: 25px; background-color: white;" src="favicon.png" alt="">
                    <span style="margin-left: 12px;">Info covid-19</span>
                  </div>
                  <span>03 Maret 2020</span>
                </div>
              </footer>
            </a>
          </article>
          <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em; margin-bottom: 1em;">
            <a target="_blank" style="text-decoration: none; color: white;" href="https://alodokter.com/virus-corona">
              <header>
                <h2>Virus Corona (COVID-19) - Gejala, penyebab dan mengobati ...</h2>
              </header>
              <section>
                <p>Apabila Anda ingin mendapatkan lebih banyak informasi tentang gejala, pencegahan, dan fakta tentang virus Corona, silakan download aplikasi ...</p>
              </section>
              <footer>
                <div class="" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 15px;">
                  <div class="" style="display: flex; flex-direction: row; align-items: center;">
                    <img style="border-radius: 50%; border: 1px solid white; width: 25px; background-color: white;" src="favicon.png" alt="">
                    <span style="margin-left: 12px;">Info covid-19</span>
                  </div>
                  <span>03 Maret 2020</span>
                </div>
              </footer>
            </a>
          </article>
          <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em; margin-bottom: 1em;">
            <a target="_blank" style="text-decoration: none; color: white;" href="https://alodokter.com/virus-corona">
              <header>
                <h2>Virus Corona (COVID-19) - Gejala, penyebab dan mengobati ...</h2>
              </header>
              <section>
                <p>Apabila Anda ingin mendapatkan lebih banyak informasi tentang gejala, pencegahan, dan fakta tentang virus Corona, silakan download aplikasi ...</p>
              </section>
              <footer>
                <div class="" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 15px;">
                  <div class="" style="display: flex; flex-direction: row; align-items: center;">
                    <img style="border-radius: 50%; border: 1px solid white; width: 25px; background-color: white;" src="favicon.png" alt="">
                    <span style="margin-left: 12px;">Info covid-19</span>
                  </div>
                  <span>03 Maret 2020</span>
                </div>
              </footer>
            </a>
          </article>
          <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em; margin-bottom: 1em;">
            <a target="_blank" style="text-decoration: none; color: white;" href="https://alodokter.com/virus-corona">
              <header>
                <h2>Virus Corona (COVID-19) - Gejala, penyebab dan mengobati ...</h2>
              </header>
              <section>
                <p>Apabila Anda ingin mendapatkan lebih banyak informasi tentang gejala, pencegahan, dan fakta tentang virus Corona, silakan download aplikasi ...</p>
              </section>
              <footer>
                <div class="" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 15px;">
                  <div class="" style="display: flex; flex-direction: row; align-items: center;">
                    <img style="border-radius: 50%; border: 1px solid white; width: 25px; background-color: white;" src="favicon.png" alt="">
                    <span style="margin-left: 12px;">Info covid-19</span>
                  </div>
                  <span>03 Maret 2020</span>
                </div>
              </footer>
            </a>
          </article>
        </div>
      </div>
    `
  }
}

customElements.define('information-container', InformationContainer)
