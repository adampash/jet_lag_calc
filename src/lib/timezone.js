import fetch from 'isomorphic-fetch'

const KEY = "33MFAIKEGD82"
const URL = "http://api.timezonedb.com"


export default function fetchTimezone({lat, lng}, callback) {
  fetch(constructURL(lat, lng)).then(response => {
    return response.json()
  })
  .then(tz => {
    callback(tz)
  })
}

function constructURL(lat, lng) {
  return `${URL}?key=${KEY}&lat=${lat}&lng=${lng}&format=json`
}
