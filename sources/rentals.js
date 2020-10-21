import axios from 'axios'

export function fetchList (options) {
  const optionsPath = Object.keys(options).map(option => {
    return `${option}=${typeof options[option] === 'string' ? options[option].replace(/\s/g, '%20') : options[option]}`
  }).join('&')
  return axios
    .get('https://search.outdoorsy.co/rentals?' + optionsPath)
}

export function fetchByID (id) {
  return axios
    .get('https://search.outdoorsy.co/rentals/' + id)
}
