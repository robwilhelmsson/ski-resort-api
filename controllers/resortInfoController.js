
const axios = require('axios')
const cheerio = require('cheerio')
const { countryContinentData } = require('../data/countryContinentData')

const getResortInfo = (req, res) => {
  const resort = req.params.resort
  const resortId = resort.toLowerCase()
  const resortInfo = []
  const resortURL = `https://www.snow-forecast.com/resorts/${resort}`
  axios.get(resortURL)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)

      $('div.h-container', html).each(function (index) {
        const name = $(this).find('div.location-breadcrumbs ul.location-breadcrumbs__list span.location-breadcrumbs__name').eq(0).text()
        const countryWithRegion = $(this).find('a.location-breadcrumbs__link:eq(1)').text()
        const country = countryWithRegion.split(' - ')[0].replace('USA', 'United States of America')
        const latitude = $(this).find('span.latitude').eq(1).text().trim()
        const longitude = $(this).find('span.longitude').eq(1).text()
        let continent
        countryContinentData.forEach((data) => {
          if (country === data.country) {
            continent = data.continent
          }
        })
        const topAltitudeValue = $(this).find('div.resort-guide-facts__col span.height').eq(1).text().trim()
        const topAltitude = topAltitudeValue ? topAltitudeValue + 'm' : ''
        const bottomAltitudeValue = $(this).find('div.resort-guide-facts__col span.height').eq(3).text().trim()
        const bottomAltitude = bottomAltitudeValue ? bottomAltitudeValue + 'm' : ''
        const totalVirticalValue = $(this).find('div.resort-guide-facts__col span.height').eq(2).text().trim()
        const totalVirtical = totalVirticalValue ? totalVirticalValue + 'm' : ''
        const totalPistes = $(this).find('div.resort-guide-item--pistes div.resort-guide-item__value').text().trim()
        const bluePistes = $(this).find('div.resort-guide-item__piste-percentage--beginner').text().trim()
        const redPistes = $(this).find('div.resort-guide-item__piste-percentage--intermediate').text().trim()
        const blackPistes = $(this).find('div.resort-guide-item__piste-percentage--advanced').text().trim()
        const skillLevel = $(this).find('div.resort-guide-item--level div.resort-guide-item__skill').text().trim()
        const areaValue = $(this).find('div.resort-guide-item--acres div.resort-guide-item__value').text().trim()
        const area = areaValue ? areaValue + ' hectares' : ''
        const dragLifts = $(this).find('div.resort-guide-facts__lifts ul.resort-guide-item__lifts span.resort-guide-item__number').eq(0).text().trim()
        const chairLifts = $(this).find('div.resort-guide-facts__lifts ul.resort-guide-item__lifts span.resort-guide-item__number').eq(1).text().trim()
        const gondolaLifts = $(this).find('div.resort-guide-facts__lifts ul.resort-guide-item__lifts span.resort-guide-item__number').eq(2).text().trim()
        const totalLiftsText = $(this).find('div.resort-guide-item--lifts div.resort-guide-item__skill--lift-total').text().trim()
        const totalLifts = totalLiftsText.replace('Total lifts = ', '')
        const touristOfficeEmail = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value a').attr('href')
        const touristOfficePhone = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(7).text().trim()
        const seasonOpen = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(0).text().trim()
        const seasonClose = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(1).text().trim()
        const nearestAirport = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(4).text().trim()
        const nearestTrainStation = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(5).text().trim()
        const restaurantsBarsValue = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(3).text().trim()
        const [restaurantsValue, barsValue] = restaurantsBarsValue.split('|').map(value => value.trim())
        const terrainParks = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(9).text().trim()
        const crossCountry = $(this).find('div.resort-guide-travel__list-block div.resort-guide-travel__value').eq(10).text().trim()
        const upperSnowDepthValue = $(this).find('div.resort-guide-report__information table.resort-snow-depths-snippet__table span.snow').eq(0).text().trim()
        const upperSnowDepth = upperSnowDepthValue ? upperSnowDepthValue + 'cm' : ''
        const lowerSnowDepthValue = $(this).find('div.resort-guide-report__information table.resort-snow-depths-snippet__table span.snow').eq(1).text().trim()
        const lowerSnowDepth = lowerSnowDepthValue ? lowerSnowDepthValue + 'cm' : ''
        const pisteConditiion = $(this).find('div.resort-guide-report__information div.resort-guide-report__value').eq(0).text().trim()
        const offPisteCondition = $(this).find('div.resort-guide-report__information div.resort-guide-report__value').eq(1).text().trim()
        const bestMonthValue = $(this).find('div.resort-guide-snow-history__month').text().trim()
        const bestMonth = bestMonthValue.split('Average:')[0].trim()
        const averageDuringMonthValue = $(this).find('div.resort-guide-snow-history__month span.resort-guide-snow-history__week').text().trim()
        const averageDuringMonth = averageDuringMonthValue.replace('Average: ', '')
        const ratingOverallValue = $(this).find('div.resort-rating p.resort-rating__overall').text().trim()
        const ratingOverallMatch = ratingOverallValue.match(/[\d.]+/)
        const ratingOverall = ratingOverallMatch ? ratingOverallMatch[0] : ''
        const ratingSnowsure = $(this).find('div.resort-rating span.resort-rating__rating').eq(0).text().trim()
        const ratingVarietyOfPistes = $(this).find('div.resort-rating span.resort-rating__rating').eq(1).text().trim()
        const ratingOffPiste = $(this).find('div.resort-rating span.resort-rating__rating').eq(2).text().trim()
        const ratingScenery = $(this).find('div.resort-rating span.resort-rating__rating').eq(3).text().trim()
        const ratingApresSki = $(this).find('div.resort-rating span.resort-rating__rating').eq(4).text().trim()
        const nearestResortName = $(this).find('section.resort-guide-nearby-resorts div.resort-guide-nearby-resorts__resort-name').map((index, element) => $(element).text().trim()).get()
        const nearestResortDistance = $(this).find('section.resort-guide-nearby-resorts div.resort-guide-nearby-resorts__distance span.dist').map((index, element) => $(element).text().trim()).get()
        const nearestResorts = nearestResortName.map((name, index) => ({
          name: name,
          distance: nearestResortDistance[index] + 'km'
        }))

        if (name.trim() !== '') {
          resortInfo.push({
            id: resortId,
            name: name,
            location: {
              country: country,
              continent: continent,
              latitude: latitude,
              longitude: longitude
            },
            virtical: {
              topAltitude: topAltitude,
              bottomAltitude: bottomAltitude,
              totalVirtical: totalVirtical
            },
            pistes: {
              total: totalPistes,
              bluePistes: bluePistes,
              redPistes: redPistes,
              blackPistes: blackPistes
            },
            lifts: {
              total: totalLifts,
              dragLifts: dragLifts,
              chairLifts: chairLifts,
              gondolaLifts: gondolaLifts

            },
            skillLevel: skillLevel,
            area: area,
            information: {
              touristOffice: {
                touristOfficeEmail: touristOfficeEmail,
                touristOfficePhone: touristOfficePhone
              },
              seasonalDates: {
                seasonOpen: seasonOpen,
                seasonClose: seasonClose
              },
              transport: {
                nearestAirport: nearestAirport,
                nearestTrainStation: nearestTrainStation,
              },
              restaurantsBars: {
                restaurants: restaurantsValue,
                bars: barsValue
              }
            },
            feautures: {
              terrainParks: terrainParks,
              crossCountrySkiing: crossCountry
            },
            conditions: {
              pisteConditiion: pisteConditiion,
              offPisteCondition: offPisteCondition,
              depth: {
                upperSnowDepth: upperSnowDepth,
                lowerSnowDepth: lowerSnowDepth
              },
              snow: {
                bestMonth: bestMonth,
                averageDuringMonth: averageDuringMonth
              }
            },
            rating: {
              overall: ratingOverall,
              ratingByItem: {
                snowsure: ratingSnowsure,
                varietyOfPistes: ratingVarietyOfPistes,
                offPiste: ratingOffPiste,
                scenery: ratingScenery,
                apresSki: ratingApresSki
              }
            },
            nearestResorts: nearestResorts
          })
        }
      })
      res.json(resortInfo)
    })
    .catch((err) => console.log(err))
}

module.exports = { getResortInfo }