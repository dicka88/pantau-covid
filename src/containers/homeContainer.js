import { date as _date } from '../utils/convertTime.js'
import hero from '../images/hero.min.png'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram, faGithub)
dom.watch()

import API from '../config/services.js'

class HomeContainer extends HTMLElement {
  connectedCallback() {
    this.render()
    this.handleApi()
  }
  async handleApi() {
    try {
      const req = await fetch(API.endpoint.covid.indonesia.summary3)
      const { confirmed, recovered, deaths, lastUpdate } = await req.json()
      const activeCare = Number(confirmed.value) - Number(recovered.value) - Number(deaths.value)

      this.querySelector('#confirm').textContent = confirmed.value
      this.querySelector('#recover').textContent = activeCare
      this.querySelector('#recovered').textContent = recovered.value
      this.querySelector('#death').textContent = deaths.value
      this.querySelector('#lastUpdate').textContent = _date(lastUpdate)
    } catch(e) {
      alert("Tolong cek koneksi anda")
    }
  }
  render() {
    this.innerHTML = `
      <section>
        <div class="">
          <h1 style="font-size: 44px; line-height: 48px; margin-bottom: 0; max-width: 800px;">Informasi Tentang Covid-19 Terkini Lawan Covid Jangan Panik</h1>
          <p style="max-width: 700px; font-size: 22px;">Situs ini merupakan sumber informasi inisiatif sukarela warganet Indonesia pro-data, terdiri dari praktisi kesehatan, akademisi & profesional.</p>
        </div>
        <img src="${hero}" style="width: 450px; height: auto; position: absolute; right: 4em; top: 100px; transform: scaleX(-1); z-index: -1;" alt="">
      </section>
      <section style="margin-top: 4em;">
        <h1>Jumlah kasus di indonesia saat ini</h1>
        <div style="display: flex; flex-wrap: wrap; flex-direction: row; justify-content: space-between; color: white;">
          <style media="screen">
            .box-info {
              display: flex;
              flex-direction: column;
              text-align: center;
              padding: 2em;
              border-radius: 8px;
              align-items: center;
              justify-content: center;
              background-color: #2e343b;
              margin-bottom: 1em;
            }
            @media only screen and (max-width: 768px) {
              .box-info {
                width: 100%;
              }
            }
          </style>
          <div class="box-info">
            <span id="confirm" style="color: yellow; font-size: 76px;">- - - -</span>
            <span>Terkonfirmasi</span>
          </div>
          <div class="box-info">
            <span id="recover" style="color: orange; font-size: 76px;">- - - -</span>
            <span>Dalam perawatan</span>
          </div>
          <div class="box-info">
            <span id="recovered" style="color: green; font-size: 76px;">- - - -</span>
            <span>Sembuh</span>
          </div>
          <div class="box-info">
            <span id="death" style="color: red; font-size: 76px;">- - - -</span>
            <span>Meninggal</span>
          </div>
        </div>
        <div class="" style="padding: 1em 0;">
          <h5 style="font-size: 13px; margin: 0;">Pembaruan terakhir</h5>
          <p id="lastUpdate" style="margin-top: 0;">- - - -</p>
        </div>
      </section>
      <section>
        <div class="" style="margin-top: 3em;">
          <h1>Bacaan terkini</h1>
          <div style="
            display: flex;
            flex-wrap: wrap;
          ">
            <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em;">
              <a style="text-decoration: none; color: white;" href="#">
                <header>
                  <h2>Cerita dari swedia asada ad kadak ad</h2>
                </header>
                <section>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <footer>
                  <div class="" style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; font-size: 15px;">
                    <div class="" style="display: flex; flex-direction: row; align-items: center;">
                      <img style="border-radius: 50%; border: 1px solid white; width: 25px;" src="https://kawalcovid19.id/android-chrome-192x192.png" alt="">
                      <span style="margin-left: 12px;">Info covid-19</span>
                    </div>
                    <span>03 Maret 2020</span>
                  </div>
                </footer>
              </a>
            </article>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('home-container', HomeContainer)
