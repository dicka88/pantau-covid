export default {
  endpoint: {
    covid: {
      global: {
        positive: 'https://api.kawalcorona.com/positif',
        recover: 'https://api.kawalcorona.com/sembuh',
        death: 'https://api.kawalcorona.com/meninggal',
        countries: 'https://covid19.mathdro.id/api/countries',
        image: 'https://covid19.mathdro.id/api/og',
        imagePattern: 'https://covid19.mathdro.id/api/countries/[country]/og'
      },
      indonesia: {
        summary: 'https://api.kawalcorona.com/indonesia',
        summary2: 'https://api.kawalcovid19.id/v1/api/case/summary',
        summary3: 'https://covid19.mathdro.id/api/countries/indonesia',
        province: 'https://indonesia-covid-19.mathdro.id/api/provins',
        daily: 'api.u9.nu/covid19',
      }
    },
    content: {
      hotline: 'https://datacovid19.id/hotline'
    }
  }
}
