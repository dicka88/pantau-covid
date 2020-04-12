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
          width: 180px;
        }
        .dark .hero-image {
           opacity: 0.5;
        }
        @media only screen and (max-width: 768px) {
          .box-info {
            width: 100%;
          }
          .mobile-330 {
            width: 330px !important;
          }
        }
      </style>
      <section style="position: relative;">
        <div class="">
          <h1 style="font-size: 2.5rem; line-height: 48px; margin-bottom: 0; max-width: 800px;">Informasi Tentang Covid-19 Terkini</h1>
          <h1 style="font-size: 2rem; line-height: 48px; margin-bottom: 0; margin-top: 0; max-width: 800px;">Lawan Covid Jangan Panik</h1>
          <p style="max-width: 700px; font-size: 22px;">
            Situs ini merupakan situs untuk memantau penyebaran <b>virus corona</b> terutama di <b>indonesia</b>, situs ini dibuat secara sukarelawan oleh tim pengembang kami.
          </p>
        </div>
        <img src="${hero}" class="mobile-330 hero-image" style="width: 450px; height: auto; position: absolute; right: 4em; top: 0; right: -1em; transform: scaleX(-1); z-index: -1;" alt="">
      </section>
      <section style="margin-top: 4em;">
        <h1>Jumlah kasus di indonesia saat ini</h1>
        <div style="display: flex; flex-wrap: wrap; flex-direction: row; justify-content: space-between; color: white;">
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
        <div style="margin-top: 2em;">
          <h1>Terdapat indikasi gejala virus covid-19 ?</h1>
          <p>Cepat segera laporkan jika anggota keluarga maupun tetangga terindikasi gejala-gejala yang mirip dengan gejala virus corona, segera isolasi diri di rumah dan segera hubungi nomor hotline berikut <a href="#/hotline">klik disini</a>.</p>
        </div>
      </section>
      <section>
        <div style="margin-top: 3em;">
          <h1>Bacaan terkini</h1>
          <div style="display: flex; flex-wrap: wrap;">
            <article style="display: flex; flex-direction: column; background-color: #2e343b; border-radius: 7px; padding: 1em;">
              <a target="_blank" style="text-decoration: none; color: white;" href="#">
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
        <div style="margin-top: 1em; text-align: center;">
          <a href="#/informasi" style="text-decoration: none;">Lebih banyak ...</a>
        </div>
      </section>
    `
  }
}

customElements.define('home-container', HomeContainer)
