class SelectComponent extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    this.render()
    this.init()
  }
  init() {
    this.handleItemListener()
    this.handleToggle()
    const vm = this
    window.addEventListener('click', function(e) {
      for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
          select.classList.remove('open');
        }
      }
    })
  }
  handleToggle() {
    const select = this.querySelector('.custom-select')

    select.addEventListener('click', function() {
    	this.classList.toggle('open')
    })
  }
  handleItemListener() {
    const vm = this
    const option = this.querySelectorAll('.custom-option')
    const trigger = this.querySelector('.custom-select-trigger')
    option.forEach(e => {
    	e.addEventListener('click', function() {
      	e.parentNode.querySelector('.custom-option.selected').classList.remove('selected')
        e.classList.add('selected')
        trigger.querySelector('span').textContent = e.getAttribute('data-value')
        trigger.querySelector('span').setAttribute('data-value', e.getAttribute('data-value'))
        vm.onChange()
      })
    })
  }
  onChange() {
    // your props code here
  }
  set item(data) {
    // example, [{value: 'adad', name: 'adad'}]
    const options = this.querySelector('.custom-select-options')
    data.forEach(e => {
      const span = document.createElement('span')
      span.textContent = e.name
      span.setAttribute('data-value', e.value)
      span.classList.add('custom-option')
      options.appendChild(span)
    })
    this.handleItemListener()
  }
  get value() {
    return this.querySelector('.custom-select-trigger span').getAttribute('data-value')
  }
  render() {
    this.innerHTML = `
      <style>
        .custom-select-wrapper {
          position: relative;
          max-width: 300px;
          margin: 1em 0;
        }
        .custom-select {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .custom-select-trigger {
          position: relative;
          display: flex;
          border: 2px solid #394a6d;
          align-items: center;
          justify-content: space-between;
          height: 30px;
          padding: 0 20px;
        }
        .dark .custom-select-trigger {
          border: 2px solid #fff;
        }
        .custom-select-options {
          opacity: 0;
          position: absolute;
          top: 100%;
          right: 0;
          left: 0;
          display: block;
          border-style: solid;
          border-width: 0 2px 2px 2px;
          border-color: #394a6d;
          transition: 0.5s;
          background-color: white;
          overflow: auto;
          max-height: 200px;
        }
        .custom-select.open .custom-select-options {
          opacity: 1;
        }
        .dark .custom-select-options {
          border-color: #fff;
          background-color: #1A1616;
        }
        .custom-option {
          padding: 20px;
          display: block;
        }
        .custom-option.selected {
          background-color: #e8e8e8;
        }
        .dark .custom-option.selected {
          background-color: #383838;
        }
        .custom-option:hover {
          background-color: #e8e8e8;
        }
        .arrow {
          position: relative;
          height: 15px;
          width: 15px;
        }
        .arrow::before, .arrow::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 0.15rem;
          height: 100%;
          transition: all 0.5s;
        }
        .arrow::before {
          left: 5px;
          transform: rotate(45deg);
          background-color: #394a6d;
        }
        .dark .arrow::before, .dark .arrow::after {
          background-color: #fff;
        }
        .arrow::after {
          left: -5px;
          transform: rotate(-45deg);
          background-color: #394a6d;
        }
        .open .arrow::before {
          transform: rotate(-45deg);
        }
        .open .arrow::after {
          transform: rotate(45deg);
        }
      </style>
      <div class="custom-select-wrapper">
        <div class="custom-select">
          <div class="custom-select-trigger">
            <span data-value="global">Semua</span>
            <div class="arrow"></div>
          </div>
          <div class="custom-select-options">
            <span data-value="Semua" class="custom-option selected">Semua</span>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('select-component', SelectComponent)
