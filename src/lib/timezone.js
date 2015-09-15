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
      stopEating: this.stopEating(date, origin.tz.zoneName),
      breakfastTz: this.destinationBreakfast(date, destination.tz.zoneName)
    }
  },

  dateString(destination) {
    let d = new Date()
    let { gmtOffset } = destination.tz
    let plus_or_min
    if (parseInt(gmtOffset) < 0)
      plus_or_min = '-'
    else
      plus_or_min = '+'

    // d = new Date('12/25/2015') // uncomment to test standard time
    return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} 08:30 GMT${plus_or_min}${destination.tz.gmtOffset/60/60*100}`
  },

  startEating(date, zoneName) {
    return moment(date).tz(zoneName).format('h:mm a z')
  },

  stopEating(date, zoneName) {
    date = date.setHours(date.getHours()-14)
    return moment(date)
      .tz(zoneName)
      .format('h:mm a z')
  },

  destinationBreakfast(date, zoneName) {
    return moment(date).tz(zoneName).format('z')
  }


}

function constructURL(lat, lng) {
  return `${URL}?key=${KEY}&lat=${lat}&lng=${lng}&format=json`
}
