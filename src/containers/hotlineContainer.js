const hotline = [
  {
    name: 'Kementrian Kesehatan',
    number: '0215210411'
  },
  {
    name: 'Kementrian Kesehatan',
    number: '081212123119'
  },
  {
    name: 'Pemprov DKI Jakarta',
    number: '112'
  },
  {
    name: 'Pemprov DKI Jakarta',
    number: '081388376955'
  },
  {
    name: 'Pemprov Jawa Tengah',
    number: '0243580713'
  },
  {
    name: 'Pemprov Jawa Tengah',
    number: '082313600560'
  },
  {
    name: 'Pemprov Jawa Timur',
    number: '0318430313'
  },
  {
    name: 'Pemprov Jawa Timur',
    number: '081334367800'
  },
  {
    name: 'Pemprov Jawa Barat',
    number: '119'
  },
  {
    name: 'Pemprov Jawa Barat',
    number: '08112093306'
  },
  {
    name: 'Pemprov D.I Yogyakarta',
    number: '0274555585'
  },
  {
    name: 'Pemprov D.I Yogyakarta',
    number: '08112764800'
  }
]

class HotlineContainer extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <style>
        .container {
          margin: 0 auto;
        }
        .columns {
          display: flex;
        }
        .columns.multiline {
          flex-wrap: wrap;
        }
        .columns .is-4 {
          padding: 1em;
          width: 30.333%;
        }
        .card {
          box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
        }
        .card:hover {
          background-color: #e8e8e8;
        }
        .dark .card:hover {
          background-color: #2b2b2b;
        }
        .center {
          text-align: center;
        }
      </style>
      <div class="container">
        <h1 class="center">Hotline penanganan kasus Covid-19</h1>
        <div class="columns multiline">
          ${
            hotline.map(item => {
              return `
              <div class="is-4">
                <div class="card" style="display: flex; flex-direction: row;" style="padding: 1em;">
                  <div style="padding: 1.67em;">
                    <i class="fas fa-phone" style="color: #3273dc;"></i>
                  </div>
                  <div>
                    <h1><a href="tel:${item.number}" style="color: #3273dc; text-decoration: none;">${item.number}</a></h1>
                    <p>${item.name}</p>
                  </div>
                </div>
              </div>`
            }).join('')
          }
        </div>
      </div>
    `
  }
}

customElements.define('hotline-container', HotlineContainer)
