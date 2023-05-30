const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');
const { resortsData } = require('../data/resortsData');

const excludeWords = [''];
const resortList = [];

const getResortList = (req, res) => {
  resortList.length = 0

  const requests = resortsData.map((resort) => {
    return axios.get(resort.address)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        $('tr.digest-row', html).each(function (index) {
          const name = $(this).find('div.name a').text().trim();
          const minAlt = $(this).find('p.elevation span.height:eq(0)').text().trim();
          const maxAlt = $(this).find('p.elevation span.height:eq(1)').text().trim();
          const url = new URL(resort.address);
          let country = url.pathname.split('/')[2]
            .replace('-', '')
            .replace(/([A-Z])/g, ' $1')
            .replace('Bosnia Herzegovina', 'Bosnia and Herzegovina')
            .replace('U S A', 'United States of America (U.S.A.)');
          excludeWords.forEach((word) => {
            country = country.replace(word, '');
          });
          country = country.trim();
          resortList.push({
            name: name,
            location: {
              country: country,
              continent: resort.continent,
            },
            altitude: {
              minAltitude: minAlt + 'm',
              maxAltitude: maxAlt + 'm',
            },
          });
        });
      })
      .catch((err) => console.log(err));
  });

  Promise.all(requests)
    .then(() => {
      resortList.sort((a, b) => {
        const countryComparison = a.location.country.localeCompare(b.location.country, undefined, { sensitivity: 'base' });
        if (countryComparison !== 0) {
          return countryComparison;
        }
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      });
      res.json(resortList);
    });
};

module.exports = {
  getResortList,
};
