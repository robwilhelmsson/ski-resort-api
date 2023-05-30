
const resortsData = [
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/A-C`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/D-G`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/H-K`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/L-M`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/N-R`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/S-U`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/V-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/A-A`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/B-E`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/F-J`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/K-N`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/O-R`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/S-V`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/W-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Rep-of-Macedonia/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Andorra/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Greece/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Romania/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/A-D`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/E-F`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/G-G`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/H-J`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/K-K`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/L-M`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/N-Q`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/R-R`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/S-S`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/T-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Hungary/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Russia/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Bosnia-Herzegovina/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Iceland/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Serbia/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Bulgaria/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ireland/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Serbia/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Slovakia/resorts/A-R`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Slovakia/resorts/S-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Croatia/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Croatia/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/A-B`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/C-E`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/F-L`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/M-O`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/P-Q`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/R-R`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/S-U`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/V-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Slovenia/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Cyprus/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kosovo/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Spain/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Czech-Republic/resorts/A-J`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Czech-Republic/resorts/K-Q`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Czech-Republic/resorts/R-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Liechtenstein/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Sweden/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Finland/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Norway/resorts/A-U`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Norway/resorts/V-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ukraine/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/France/resorts/A-B`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/C-K`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/L-L`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/M-R`,
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/S-Z`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Poland/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/United-Kingdom/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Portugal/resorts`,
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Australia/resorts`,
    continent: 'Oceania'
  },

  {
    address: `https://www.snow-forecast.com/countries/New-Zealand/resorts`,
    continent: 'Oceania'
  },

  {
    address: `https://www.snow-forecast.com/countries/Argentina/resorts`,
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Chile/resorts`,
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ecuador/resorts`,
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Bolivia/resorts`,
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Columbia/resorts`,
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Peru/resorts`,
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/China/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/A-A`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/B-E`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/F-G`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/H-H`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/I-J`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/K-K`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/L-L`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/M-M`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/N-N`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/O-R`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/S-S`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/T-T`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/U-X`,
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/Y-Z`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Armenia/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Israel/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Pakistan/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Azerbaijan/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kazakstan/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/South-Korea/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Georgia/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kyrgyzstan/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Taiwan/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/India/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Lebanon/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Turkey/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Indonesia/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Myanmar-Burma/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Iran/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Nepal/resorts`,
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Egypt/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Lesotho/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/S-Africa/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ethiopia/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Morocco/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Tanzania/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kenya/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Reunion/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Uganda/resorts`,
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/A-C`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/D-L`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/M-O`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/P-S`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/T-Z`,
    continent: 'North America'
  },

  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/A-A`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/B-B`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/C-C`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/D-G`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/H-K`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/L-L`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/M-M`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/N-R`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/S-S`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/T-V`,
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/W-Z`,
    continent: 'North America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Greenland/resorts`,
    continent: 'North America'
  },
]

module.exports = { resortsData }