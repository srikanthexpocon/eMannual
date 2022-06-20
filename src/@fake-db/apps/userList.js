import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
  users: [
    {
      id: 1,
      fullName: 'Sun Pharma',
      company: 'Yotz PVT LTD',
      stall_no: 'A1',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022'
     
    },
    {
      id: 2,
      fullName: 'Torrent',
      company: 'Skinder PVT LTD',
      stall_no: 'B2',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 3,
      fullName: 'Emcure',
      company: 'Oozz PVT LTD',
      stall_no: 'c1',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'inactive',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 4,
      fullName: 'Intus',
      company: 'Oozz PVT LTD',
      stall_no: 'D1',
      username: 'crisby3',
      country: 'China',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'inactive',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      stall_no: 'A2',
      username: 'mhurran4',
      country: 'Pakistan',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'inactive',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      stall_no: 'B1',
      username: 'shalstead5',
      country: 'China',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      password:'abc123',
      currentPlan: 'company',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: ''
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      stall_no: 'C2',
      username: 'bgallemore6',
      country: 'Canada',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      password:'abc123',
      currentPlan: 'company',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: ''
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      company: 'Pixoboo PVT LTD',
      stall_no: 'D2',
      username: 'kliger7',
      country: 'France',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      password:'abc123',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      company: 'Tekfly PVT LTD',
      stall_no: 'B3',
      username: 'fscotfurth8',
      country: 'China',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/2.png').default
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      company: 'Gigashots PVT LTD',
      stall_no: 'A3',
      username: 'jbellany9',
      country: 'Jamaica',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      password:'abc123',
      currentPlan: 'company',
      status: 'inactive',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 11,
      fullName: 'Jonah Wharlton',
      company: 'Eare PVT LTD',
     stall_no: 'A1',
      username: 'jwharltona',
      country: 'United States',
      contact: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'inactive',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/4.png').default
    },
    {
      id: 12,
      fullName: 'Seth Hallam',
      company: 'Yakitri PVT LTD',
     stall_no: 'A1',
      username: 'shallamb',
      country: 'Peru',
      contact: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/5.png').default
    },
    {
      id: 13,
      fullName: 'Yoko Pottie',
      company: 'Leenti PVT LTD',
     stall_no: 'A1',
      username: 'ypottiec',
      country: 'Philippines',
      contact: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      password:'abc123',
      currentPlan: 'basic',
      status: 'inactive',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/7.png').default
    },
    {
      id: 14,
      fullName: 'Maximilianus Krause',
      company: 'Digitube PVT LTD',
      stall_no: 'A1',
      username: 'mkraused',
      country: 'Democratic Republic of the Congo',
      contact: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 15,
      fullName: 'Zsazsa McCleverty',
      company: 'Kaymbo PVT LTD',
      stall_no: 'A1',
      username: 'zmcclevertye',
      country: 'France',
      contact: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/2.png').default
    },
    {
      id: 16,
      fullName: 'Bentlee Emblin',
      company: 'Yambee PVT LTD',
      stall_no: 'A1',
      username: 'bemblinf',
      country: 'Spain',
      contact: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      password:'abc123',
      currentPlan: 'company',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/6.png').default
    },
    {
      id: 17,
      fullName: 'Brockie Myles',
      company: 'Wikivu PVT LTD',
      stall_no: 'A1',
      username: 'bmylesg',
      country: 'Poland',
      contact: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      password:'abc123',
      currentPlan: 'basic',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: ''
    },
    {
      id: 18,
      fullName: 'Bertha Biner',
      company: 'Twinte PVT LTD',
      stall_no: 'A1',
      username: 'bbinerh',
      country: 'Yemen',
      contact: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/7.png').default
    },
    {
      id: 19,
      fullName: 'Travus Bruntjen',
      company: 'Cogidoo PVT LTD',
     stall_no: 'A1',
      username: 'tbruntjeni',
      country: 'France',
      contact: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'active',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: ''
    },
    {
      id: 20,
      fullName: 'Wesley Burland',
      company: 'Bubblemix PVT LTD',
      stall_no: 'A1',
      username: 'wburlandj',
      country: 'Honduras',
      contact: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      password:'abc123',
      currentPlan: 'team',
      status: 'inactive',
      start_date: '09/23/2016',
      end_date: '30/03/2022',
      avatar: require('@src/assets/images/avatars/6.png').default
    },
    {
      id: 21,
      fullName: 'Selina Kyle',
      company: 'Wayne Enterprises',
     stall_no: 'A1',
      username: 'catwomen1940',
      country: 'USA',
      contact: '(829) 537-0057',
      email: 'irena.dubrovna@wayne.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 22,
      fullName: 'Jameson Lyster',
      company: 'Quaxo PVT LTD',
      stall_no: 'A1',
      username: 'jlysterl',
      country: 'Ukraine',
      contact: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      password:'abc123',
      currentPlan: 'company',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/8.png').default
    },
    {
      id: 23,
      fullName: 'Kare Skitterel',
      company: 'Ainyx PVT LTD',
      stall_no: 'A1',
      username: 'kskitterelm',
      country: 'Poland',
      contact: '(254) 845-4107',
      email: 'kskitterelm@washingtonpost.com',
      password:'abc123',
      currentPlan: 'basic',
      status: 'active',
      avatar: require('@src/assets/images/avatars/3.png').default
    },
    {
      id: 24,
      fullName: 'Cleavland Hatherleigh',
      company: 'Flipopia PVT LTD',
      stall_no: 'A1',
      username: 'chatherleighn',
      country: 'Brazil',
      contact: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: require('@src/assets/images/avatars/2.png').default
    },
    {
      id: 25,
      fullName: 'Adeline Micco',
      company: 'Topicware PVT LTD',
      stall_no: 'A1',
      username: 'amiccoo',
      country: 'France',
      contact: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: ''
    },
    {
      id: 26,
      fullName: 'Hugh Hasson',
      company: 'Skinix PVT LTD',
      stall_no: 'A1',
      username: 'hhassonp',
      country: 'China',
      contact: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      password:'abc123',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/4.png').default
    },
    {
      id: 27,
      fullName: 'Germain Jacombs',
      company: 'Youopia PVT LTD',
      stall_no: 'A1',
      username: 'gjacombsq',
      country: 'Zambia',
      contact: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 28,
      fullName: 'Bree Kilday',
      company: 'Jetpulse PVT LTD',
      stall_no: 'A1',
      username: 'bkildayr',
      country: 'Portugal',
      contact: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: ''
    },
    {
      id: 29,
      fullName: 'Candice Pinyon',
      company: 'Kare PVT LTD',
      stall_no: 'A1',
      username: 'cpinyons',
      country: 'Sweden',
      contact: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: require('@src/assets/images/avatars/7.png').default
    },
    {
      id: 30,
      fullName: 'Isabel Mallindine',
      company: 'Voomm PVT LTD',
      stall_no: 'A1',
      username: 'imallindinet',
      country: 'Slovenia',
      contact: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: ''
    },
    {
      id: 31,
      fullName: 'Gwendolyn Meineken',
      company: 'Oyondu PVT LTD',
      stall_no: 'A1',
      username: 'gmeinekenu',
      country: 'Moldova',
      contact: '(551) 379-7460',
      email: 'gmeinekenu@hc360.com',
      password:'abc123',
      currentPlan: 'basic',
      status: 'active',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 32,
      fullName: 'Rafaellle Snowball',
      company: 'Fivespan PVT LTD',
      stall_no: 'A1',
      username: 'rsnowballv',
      country: 'Philippines',
      contact: '(974) 829-0911',
      email: 'rsnowballv@indiegogo.com',
      password:'abc123',
      currentPlan: 'basic',
      status: 'active',
      avatar: require('@src/assets/images/avatars/5.png').default
    },
    {
      id: 33,
      fullName: 'Rochette Emer',
      company: 'Thoughtworks PVT LTD',
      stall_no: 'A1',
      username: 'remerw',
      country: 'North Korea',
      contact: '(841) 889-3339',
      email: 'remerw@blogtalkradio.com',
      password:'abc123',
      currentPlan: 'basic',
      status: 'active',
      avatar: require('@src/assets/images/avatars/8.png').default
    },
    {
      id: 34,
      fullName: 'Ophelie Fibbens',
      company: 'Jaxbean PVT LTD',
      stall_no: 'A1',
      username: 'ofibbensx',
      country: 'Indonesia',
      contact: '(764) 885-7351',
      email: 'ofibbensx@booking.com',
      currentPlan: 'company',
      status: 'active',
      avatar: require('@src/assets/images/avatars/4.png').default
    },
    {
      id: 35,
      fullName: 'Stephen MacGilfoyle',
      company: 'Browseblab PVT LTD',
      stall_no: 'A1',
      username: 'smacgilfoyley',
      country: 'Japan',
      contact: '(350) 589-8520',
      email: 'smacgilfoyley@bigcartel.com',
      password:'abc123',
      currentPlan: 'company',
      status: 'active',
      avatar: ''
    },
    {
      id: 36,
      fullName: 'Bradan Rosebotham',
      company: 'Agivu PVT LTD',
      stall_no: 'A1',
      username: 'brosebothamz',
      country: 'Belarus',
      contact: '(882) 933-2180',
      email: 'brosebothamz@tripadvisor.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 37,
      fullName: 'Skip Hebblethwaite',
      company: 'Katz PVT LTD',
     stall_no: 'A1',
      username: 'shebblethwaite10',
      country: 'Canada',
      contact: '(610) 343-1024',
      email: 'shebblethwaite10@arizona.edu',
      password:'abc123',
      currentPlan: 'company',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 38,
      fullName: 'Moritz Piccard',
      company: 'Twitternation PVT LTD',
      stall_no: 'A1',
      username: 'mpiccard11',
      country: 'Croatia',
      contact: '(365) 277-2986',
      email: 'mpiccard11@vimeo.com',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 39,
      fullName: 'Tyne Widmore',
      company: 'Yombu PVT LTD',
      stall_no: 'A1',
      username: 'twidmore12',
      country: 'Finland',
      contact: '(531) 731-0928',
      email: 'twidmore12@bravesites.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: ''
    },
    {
      id: 40,
      fullName: 'Florenza Desporte',
      company: 'Kamba PVT LTD',
      stall_no: 'A1',
      username: 'fdesporte13',
      country: 'Ukraine',
      contact: '(312) 104-2638',
      email: 'fdesporte13@omniture.com',
      password:'abc123',
      currentPlan: 'company',
      status: 'active',
      avatar: require('@src/assets/images/avatars/6.png').default
    },
    {
      id: 41,
      fullName: 'Edwina Baldetti',
      company: 'Dazzlesphere PVT LTD',
      stall_no: 'A1',
      username: 'ebaldetti14',
      country: 'Haiti',
      contact: '(315) 329-3578',
      email: 'ebaldetti14@theguardian.com',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: ''
    },
    {
      id: 42,
      fullName: 'Benedetto Rossiter',
      company: 'Mybuzz PVT LTD',
      stall_no: 'A1',
      username: 'brossiter15',
      country: 'Indonesia',
      contact: '(323) 175-6741',
      email: 'brossiter15@craigslist.org',
      password:'abc123',
      currentPlan: 'team',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 43,
      fullName: 'Micaela McNirlan',
      company: 'Tambee PVT LTD',
     stall_no: 'A1',
      username: 'mmcnirlan16',
      country: 'Indonesia',
      contact: '(242) 952-0916',
      email: 'mmcnirlan16@hc360.com',
      password:'abc123',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 44,
      fullName: 'Vladamir Koschek',
      company: 'Centimia PVT LTD',
      stall_no: 'A1',
      username: 'vkoschek17',
      country: 'Guatemala',
      contact: '(531) 758-8335',
      email: 'vkoschek17@abc.net.au',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: ''
    },
    {
      id: 45,
      fullName: 'Corrie Perot',
      company: 'Flipopia PVT LTD',
      stall_no: 'A1',
      username: 'cperot18',
      country: 'China',
      contact: '(659) 385-6808',
      email: 'cperot18@goo.ne.jp',
      password:'abc123',
      currentPlan: 'team',
      status: 'active',
      avatar: require('@src/assets/images/avatars/3.png').default
    },
    {
      id: 46,
      fullName: 'Saunder Offner',
      company: 'Skalith PVT LTD',
      stall_no: 'A1',
      username: 'soffner19',
      country: 'Poland',
      contact: '(200) 586-2264',
      email: 'soffner19@mac.com',
      password:'abc123',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: ''
    },
    {
      id: 47,
      fullName: 'Karena Courtliff',
      company: 'Feedfire PVT LTD',
     stall_no: 'A1',
      username: 'kcourtliff1a',
      country: 'China',
      contact: '(478) 199-0020',
      email: 'kcourtliff1a@bbc.co.uk',
      password:'abc123',
      currentPlan: 'basic',
      status: 'active',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 48,
      fullName: 'Onfre Wind',
      company: 'Thoughtmix PVT LTD',
      stall_no: 'A1',
      username: 'owind1b',
      country: 'Ukraine',
      contact: '(344) 262-7270',
      email: 'owind1b@yandex.ru',
      password:'abc123',
      currentPlan: 'basic',
      status: 'active',
      avatar: ''
    },
    {
      id: 49,
      fullName: 'Paulie Durber',
      company: 'Babbleblab PVT LTD',
      stall_no: 'A1',
      username: 'pdurber1c',
      country: 'Sweden',
      contact: '(694) 676-1275',
      email: 'pdurber1c@gov.uk',
      password:'abc123',
      currentPlan: 'team',
      status: 'inactive',
      avatar: ''
    },
    {
      id: 50,
      fullName: 'Beverlie Krabbe',
      company: 'Kaymbo PVT LTD',
      stall_no: 'A1',
      username: 'bkrabbe1d',
      country: 'China',
      contact: '(397) 294-5153',
      email: 'bkrabbe1d@home.pl',
      password:'abc123',
      currentPlan: 'company',
      status: 'active',
      avatar: require('@src/assets/images/avatars/9.png').default
    }
  ]
}

// GET ALL DATA
mock.onGet('/api/users/list/all-data').reply(200, data.users)

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data)

  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1

  data.users.unshift(user)

  return [201, { user }]
})

// GET Updated DATA
mock.onGet('/api/users/list/data').reply(config => {
  const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()
  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      users: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// GET USER
mock.onGet('/api/users/user').reply(config => {
  const { id } = config
  const user = data.users.find(i => i.id === id)
  return [200, { user }]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  let userId = config.id

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
