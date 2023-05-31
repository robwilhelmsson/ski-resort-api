
const resortsData = [
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/A-C`,
    country: 'Switzerland',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/D-G`,
    country: 'Switzerland',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/H-K`,
    country: 'Switzerland',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/L-M`,
    country: 'Switzerland',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/N-R`,
    country: 'Switzerland',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/S-U`,
    country: 'Switzerland',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Switzerland/resorts/V-Z`,
    country: 'Switzerland',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/A-A`,
    country: 'Germany',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/B-E`,
    country: 'Germany',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/F-J`,
    country: 'Germany',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/K-N`,
    country: 'Germany',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/O-R`,
    country: 'Germany',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/S-V`,
    country: 'Germany',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Germany/resorts/W-Z`,
    country: 'Germany',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Rep-of-Macedonia/resorts`,
    country: 'Republic of Macedonia',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Andorra/resorts`,
    country: 'Andorra',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Greece/resorts`,
    country: 'Greece',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Romania/resorts`,
    country: 'Romania',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/A-D`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/E-F`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/G-G`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/H-J`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/K-K`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/L-M`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/N-Q`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/R-R`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/S-S`,
    country: 'Austria',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Austria/resorts/T-Z`,
    country: 'Austria',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Hungary/resorts`,
    country: 'Hungary',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Russia/resorts`,
    country: 'Russia',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Bosnia-Herzegovina/resorts`,
    country: 'Bosnia and Herzegovina',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Iceland/resorts`,
    country: 'Iceland',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Serbia/resorts`,
    country: 'Serbia',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Bulgaria/resorts`,
    country: 'Bulgaria',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ireland/resorts`,
    country: 'Ireland',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Slovakia/resorts/A-R`,
    country: 'Slovakia',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Slovakia/resorts/S-Z`,
    country: 'Slovakia',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Croatia/resorts`,
    country: 'Croatia',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/A-B`,
    country: 'Italy',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/C-E`,
    country: 'Italy',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/F-L`,
    country: 'Italy',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/M-O`,
    country: 'Italy',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/P-Q`,
    country: 'Italy',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/R-R`,
    country: 'Italy',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/S-U`,
    country: 'Italy',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Italy/resorts/V-Z`,
    country: 'Italy',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Slovenia/resorts`,
    country: 'Slovenia',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Cyprus/resorts`,
    country: 'Cyprus',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kosovo/resorts`,
    country: 'Kosavo',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Spain/resorts`,
    country: 'Spain',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Czech-Republic/resorts/A-J`,
    country: 'Czech Republic',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Czech-Republic/resorts/K-Q`,
    country: 'Czech Republic',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Czech-Republic/resorts/R-Z`,
    country: 'Czech Republic',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Liechtenstein/resorts`,
    country: 'Liechtenstein',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Sweden/resorts`,
    country: 'Sweden',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Finland/resorts`,
    country: 'Finland',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Norway/resorts/A-U`,
    country: 'Norway',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/Norway/resorts/V-Z`,
    country: 'Norway',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ukraine/resorts`,
    country: 'Ukraine',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/France/resorts/A-B`,
    country: 'France',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/C-K`,
    country: 'France',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/L-L`,
    country: 'France',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/M-R`,
    country: 'France',
    continent: 'Europe'
  },
  {
    address: `https://www.snow-forecast.com/countries/France/resorts/S-Z`,
    country: 'France',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Poland/resorts`,
    country: 'Poland',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/United-Kingdom/resorts`,
    country: 'United Kingdom',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Portugal/resorts`,
    country: 'Portugal',
    continent: 'Europe'
  },

  {
    address: `https://www.snow-forecast.com/countries/Australia/resorts`,
    country: 'Australia',
    continent: 'Oceania'
  },

  {
    address: `https://www.snow-forecast.com/countries/New-Zealand/resorts`,
    country: 'New Zealand',
    continent: 'Oceania'
  },

  {
    address: `https://www.snow-forecast.com/countries/Argentina/resorts`,
    country: 'Argentina',
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Chile/resorts`,
    country: 'Chile',
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ecuador/resorts`,
    country: 'Ecuador',
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Bolivia/resorts`,
    country: 'Bolivia',
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Columbia/resorts`,
    country: 'Columbia',
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Peru/resorts`,
    country: 'Peru',
    continent: 'South America'
  },

  {
    address: `https://www.snow-forecast.com/countries/China/resorts`,
    country: 'China',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/A-A`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/B-E`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/F-G`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/H-H`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/I-J`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/K-K`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/L-L`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/M-M`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/N-N`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/O-R`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/S-S`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/T-T`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/U-X`,
    country: 'Japan',
    continent: 'Asia'
  },
  {
    address: `https://www.snow-forecast.com/countries/Japan/resorts/Y-Z`,
    country: 'Japan',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Armenia/resorts`,
    country: 'Armenia',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Israel/resorts`,
    country: 'Israel',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Pakistan/resorts`,
    country: 'Pakistan',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Azerbaijan/resorts`,
    country: 'Azerbaijan',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kazakstan/resorts`,
    country: 'Kazakstan',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/South-Korea/resorts`,
    country: 'South Korea',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Georgia/resorts`,
    country: 'Georgia',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kyrgyzstan/resorts`,
    country: 'Kyrgyzstan',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Taiwan/resorts`,
    country: 'Taiwan',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/India/resorts`,
    country: 'India',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Lebanon/resorts`,
    country: 'Lebanon',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Turkey/resorts`,
    country: 'Turkey',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Indonesia/resorts`,
    country: 'Indonesia',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Myanmar-Burma/resorts`,
    country: 'Myanmar-Burma',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Iran/resorts`,
    country: 'Iran',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Nepal/resorts`,
    country: 'Nepal',
    continent: 'Asia'
  },

  {
    address: `https://www.snow-forecast.com/countries/Egypt/resorts`,
    country: 'Egypt',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Lesotho/resorts`,
    country: 'Lesotho',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/S-Africa/resorts`,
    country: 'South Africa',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Ethiopia/resorts`,
    country: 'Ethiopia',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Morocco/resorts`,
    country: 'Morocco',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Tanzania/resorts`,
    country: 'Tanzania',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Kenya/resorts`,
    country: 'Kenya',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Reunion/resorts`,
    country: 'Reunion',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Uganda/resorts`,
    country: 'Uganda',
    continent: 'Africa'
  },

  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/A-C`,
    country: 'Canada',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/D-L`,
    country: 'Canada',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/M-O`,
    country: 'Canada',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/P-S`,
    country: 'Canada',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/Canada/resorts/T-Z`,
    country: 'Canada',
    continent: 'North America'
  },

  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/A-A`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/B-B`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/C-C`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/D-G`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/H-K`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/L-L`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/M-M`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/N-R`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/S-S`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/T-V`,
    country: 'United States of America',
    continent: 'North America'
  },
  {
    address: `https://www.snow-forecast.com/countries/USA/resorts/W-Z`,
    country: 'United States of America',
    continent: 'North America'
  },

  {
    address: `https://www.snow-forecast.com/countries/Greenland/resorts`,
    country: 'Greenland',
    continent: 'North America'
  },
]

module.exports = { resortsData }