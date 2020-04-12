import API from '../config/services.js'

class WilayahContainer extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.render()
    this.handleData()
  }
  async handleData() {
    const api_region = API.endpoint.covid.indonesia.province
    try {
      const region = await fetch(api_region)
      const result = await region.json()
      this.renderTable(result.data)
    } catch(e) {
      alert('check your connection')
    }
  }
  renderTable(data = []) {
    const render = data.map(({ province, active_cases, recovered, death }) => {
      return `
        <div class="row">
          <div>${province}</div>
          <div>${active_cases}</div>
          <div>${recovered}</div>
          <div>${death}</div>
        </div>
      `
    }).join('')
    this.shadowDOM.querySelector('#table-content').innerHTML = render
  }
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .table {
          display:table;
          width: 100%;
        }
        .dark .thead {
          color: black;
        }
        .thead {
          display: table-header-group;
          background-color: #e8e8e8;
          font-weight: bold;
        }
        .thead > div {
          display: table-cell;
          padding: 1em 2em;
          text-align: justify;
          border-bottom: 1px solid black;
        }
        .tbody {
          display: table-row-group
        }
        .row {
          display: table-row;
        }
        .row > div {
          padding: 10px 2em;
          display: table-cell;
        }
        .wrap-table {
          border-radius: 10px;
          overflow: hidden;
        }
        .box-shadow {
          box-shadow: 0 0.5em 2em -0.125em rgba(148, 146, 146, 0.52), 0 0 0 1px rgba(10,10,10,.02);
        }
        @media only screen and (max-width: 768px) {
          .table {
            font-size: 10px;
          }
        }
      </style>
      <div>
        <div>
          <h1>Kasus Covid-19 di wilayah Indonesia</h1>
        </div>
        <div class="wrap-table box-shadow">
          <div class="table" border="1">
            <div class="thead">
              <div>Wilayah</div>
              <div>Positif</div>
              <div>Sembuh</div>
              <div>Meninggal</div>
            </div>
            <div class="tbody" id="table-content">

            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('wilayah-container', WilayahContainer)
