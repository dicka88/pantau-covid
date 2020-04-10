export default {
  endpoint: {
    covid: {
      global: {
        positive: 'https://api.kawalcorona.com/positif',
        recover: 'https://api.kawalcorona.com/sembuh',
        death: 'https://api.kawalcorona.com/meninggal',
        image: 'https://covid19.mathdro.id/api/og'
      },
      indonesia: {
        summary: 'https://api.kawalcorona.com/indonesia',
        summary2: 'https://api.kawalcovid19.id/v1/api/case/summary',
        province: 'https://api.datacovid19.id/province/indonesia',
        daily: 'api.u9.nu/covid19',
      }
    },
    content: {
      hotline: 'https://datacovid19.id/hotline'
    }
  }
}
