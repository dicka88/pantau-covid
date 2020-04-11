const constant = {
  day: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  month: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
}
// todo add params preg match or format Dmy His
const date = (string = null) => {
  const x = new Date(string)
  const date = x.getDate() < 10 ? '0' + x.getDate() : x.getDate()
  const month = constant.month[x.getMonth()]
  const year = x.getFullYear()
  const hour = x.getHours() < 10 ? '0' + x.getHours() : x.getHours()
  const minutes = x.getMinutes() < 10 ? '0' + x.getMinutes() : x.getMinutes()
  const second = x.getSeconds() < 10 ? '0' + x.getSeconds() : x.getSeconds()

  return `${date} ${month} ${year} ${hour}:${minutes}:${second}`
}

export {
  date
}
