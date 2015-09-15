import moment from 'moment-timezone'
import fetch from 'isomorphic-fetch'

const KEY = "33MFAIKEGD82"
const URL = "http://api.timezonedb.com"


export default function fetchTimezone({lat, lng}, callback) {
  fetch(constructURL(lat, lng)).then(response => {
    return response.json()
  })
  .then(tz => {
    callback(tz)
  }, function(err) {
    console.log(err)
  })
}

export let Timezone = {
  getTimes(origin, destination) {
    let date = new Date(
      Date.parse(this.dateString(destination))
    )
    return {
      startEating: this.startEating(date, origin.tz.zoneName),
      stopEating: this.stopEating(date, origin.tz.zoneName)
    }
  },

  dateString(destination) {
    let d = new Date()
    return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} 08:30 GMT+${destination.tz.gmtOffset/60/60*100}`
  },

  startEating(date, zoneName) {
    return moment(date).tz(zoneName).format('h:mm a z')
  },

  stopEating(date, zoneName) {
    return moment(date.setHours(date.getHours()-14))
      .tz(zoneName)
      .format('h:mm a z')
  },

}

function constructURL(lat, lng) {
  return `${URL}?key=${KEY}&lat=${lat}&lng=${lng}&format=json`
}
