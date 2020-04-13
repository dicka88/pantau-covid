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
      console.log("You may offline");
    }
  }
  render() {
    this.innerHTML = `
      <style media="screen">
        .main .title {
          font-size: 2.5rem;
          line-height: 48px;
          margin-bottom: 0;
          max-width: 800px;
        }
        .main .sub-title {
          font-size: 2rem;
          line-height: 48px;
          margin-bottom: 0;
          margin-top: 0;
          max-width: 800px;
        }
        .main .paragraph {
          max-width: 700px;
          font-size: 22px;
        }
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
        .hero-image {
          width: 450px;
          height: auto;
          position: absolute;
          right: 4em;
          top: 0;
          right: -1em;
          transform: scaleX(-1);
          z-index: -1;
        }
        .mt-1 {
          margin-top: 1em;
        }
        .mt-2 {
          margin-top: 2em;
        }
        .mt-3 {
          margin-top: 3em;
        }
        .mt-4 {
          margin-top: 4em;
        }
        .text-center {
          text-align: center;
        }
        .flex-wrap {
          display: flex;
          flex-wrap: wrap;
        }
        .dark .hero-image {
           opacity: 0.5;
        }
        article-card-component {
          width: 49.2%;
        }
        @media only screen and (max-width: 768px) {
          .box-info {
            width: 100%;
          }
          .mobile-330 {
            width: 330px !important;
          }
          article-card-component {
            width: 100%;
          }
        }
      </style>
      <section style="position: relative;">
        <div class="main">
          <h1 class="title">Informasi Tentang Covid-19 Terkini</h1>
          <h1 class="sub-title">Lawan Covid Jangan Panik</h1>
          <p class="paragraph">
            Situs ini merupakan situs untuk memantau penyebaran <b>virus corona</b> terutama di <b>indonesia</b>, situs ini dibuat secara sukarelawan oleh tim pengembang kami.
          </p>
        </div>
        <img src="${hero}" class="mobile-330 hero-image" alt="hero">
      </section>
      <section class="mt-4">
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
        <div class="mt-2">
          <h1>Terdapat indikasi gejala virus covid-19 ?</h1>
          <p>Cepat segera laporkan jika anggota keluarga maupun tetangga terindikasi gejala-gejala yang mirip dengan gejala virus corona, segera isolasi diri di rumah dan segera hubungi nomor hotline berikut <a href="#/hotline">klik disini</a>.</p>
        </div>
      </section>
      <section>
        <div class="mt-3">
          <h1>Bacaan terkini</h1>
          <div class="flex-wrap">
            <article-card-component></article-card-component>
          </div>
        </div>
        <div class="mt-1 text-center">
          <a href="#/informasi" style="text-decoration: none;">Lebih banyak ...</a>
        </div>
      </section>
    `
  }
}

customElements.define('home-container', HomeContainer)
