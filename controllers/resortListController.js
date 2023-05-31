const axios = require('axios')
const cheerio = require('cheerio')
const { URL } = require('url')
const { resortsData } = require('../data/resortsData')


const resortList = []

const getResortList = (req, res) => {

  resortList.length = 0
  const continentSearch = req.params.continent
  const countrySearch = req.params.country

  let filteredResorts = resortsData
  if (continentSearch) {
    filteredResorts = filteredResorts.filter(
      (resort) => resort.continent.toLowerCase() === continentSearch.toLowerCase()
    );
  }
  if (countrySearch) {
    filteredResorts = filteredResorts.filter(
      (resort) => resort.country.toLowerCase() === countrySearch.toLowerCase()
    );
  }

  const requests = filteredResorts.map((resort) => {
    return axios
      .get(resort.address)
      .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)

        $('tr.digest-row', html).each(function (index) {
          const name = $(this).find('div.name a').text().trim()
          const minAlt = $(this).find('p.elevation span.height:eq(0)').text().trim()
          const maxAlt = $(this).find('p.elevation span.height:eq(1)').text().trim()

          resortList.push({
            name: name,
            location: {
              country: resort.country,
              continent: resort.continent,
            },
            altitude: {
              minAltitude: minAlt + 'm',
              maxAltitude: maxAlt + 'm',
            },
          })
        })
      })
      .catch((err) => console.log(err))
  })

  Promise.all(requests)
    .then(() => {
      resortList.sort((a, b) => {
        const countryComparison = a.location.country.localeCompare(b.location.country, undefined, { sensitivity: 'base' })
        if (countryComparison !== 0) {
          return countryComparison
        }
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
      })
      res.json(resortList)
    })
}

module.exports = { getResortList }
