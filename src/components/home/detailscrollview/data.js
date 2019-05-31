  import moment from 'moment';

  // Hardcode days for the sake of simplicity
  const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D'),
  moment().add(3, 'days').format('dddd, MMM D'),
  moment().add(4, 'days').format('dddd, MMM D'),
  moment().add(5, 'days').format('dddd, MMM D')
];
  // Same for times
  const times = [ '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00' ];

  export const movies = [
    {
      title: 'Avangers - EndGame',
      poster: 'https://i.ibb.co/JnmqW0W/Webp-net-resizeimage-1.jpg',
      genre: 'Fantasy/Sci-fi',
      days,
      times,
    },
    {
      title: 'Pet Sematary',
      poster: 'https://i.ibb.co/8xXSmBS/Webp-net-resizeimage.jpg',
      genre: '‎Horror',
      days,
      times,
    },
    {
      title: 'Never Stop Looking',
      poster: 'https://marketplace.canva.com/MADLhXF5uSs/1/0/thumbnail_large-1/canva-monochrome-photographer-lake-movie-poster-MADLhXF5uSs.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'The Walk',
      poster: 'https://marketplace.canva.com/MADOPiuIVEs/1/0/thumbnail_large-1/canva-monochromatic-yellow-dark-movie-poster-MADOPiuIVEs.jpg',
      genre: '‎Category/Category',
      days,
      times,
    },
    {
      title: 'SPOOKY',
      poster: 'https://marketplace.canva.com/MADOPsGGzvs/1/0/thumbnail_large-1/canva-halloween-movie-poster-MADOPsGGzvs.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'The Night Is Young',
      poster: 'https://marketplace.canva.com/MADOPgvRb2Y/1/0/thumbnail_large-1/canva-dark-romance-movie-poster-MADOPgvRb2Y.jpg',
      genre: 'Category/Category',
      days,
      times,
    },
    {
      title: 'Movie Night (1)',
      poster: 'https://marketplace.canva.com/MADOPmJYqSo/1/0/thumbnail_large-1/canva-movie-fund-raising-poster-MADOPmJYqSo.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'Movie Night (2)',
      poster: 'https://marketplace.canva.com/MADK__c-MC4/1/0/thumbnail_large-1/canva-black-movie-night-invitations-poster-MADK__c-MC4.jpg',
      genre: 'Category/Category',
      days,
      times,
    },
    {
      title: 'Just My Type',
      poster: 'https://marketplace.canva.com/MADLhbUiy8Y/1/0/thumbnail_large-1/canva-vintage-black-and-white-typewriter-poster-MADLhbUiy8Y.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'a Bit of Heaven',
      poster: 'https://marketplace.canva.com/MADLhY159k4/1/0/thumbnail_large-1/canva-white-movie-poster-MADLhY159k4.jpg',
      genre: 'Category/Category',
      days,
      times,
    },
    {
      title: 'More Than I Should',
      poster: 'https://marketplace.canva.com/MADLhVE5lSY/1/0/thumbnail_large-1/canva-black-and-white-romantic-comedy-movie-poster-MADLhVE5lSY.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'Locked',
      poster: 'https://marketplace.canva.com/MADLhQRovIU/1/0/thumbnail_large-1/canva-black-and-white-movie-poster-MADLhQRovIU.jpg',
      genre: 'Category/Category',
      days,
      times,
    },
    {
      title: 'DOwn The Rabbit Hole',
      poster: 'https://marketplace.canva.com/MADOPtNnzGY/1/0/thumbnail_large-1/canva-creepy-horror-movie-teaser-poster-MADOPtNnzGY.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'a Mountain for Dreamers',
      poster: 'https://marketplace.canva.com/MAC3SBiS8Rk/1/0/thumbnail_large-5/canva-simple-photo-movie-horse-poster-MAC3SBiS8Rk.jpg',
      genre: 'Category/Category',
      days,
      times,
    },
    {
      title: 'Thriller Movie Night',
      poster: 'https://marketplace.canva.com/MAC4COVSzCo/1/0/thumbnail_large-5/canva-pink-and-blue-movie-tickets-poster-MAC4COVSzCo.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'Silence Please',
      poster: 'https://marketplace.canva.com/MADSMP0VTVc/1/0/thumbnail_large-1/canva-monochrome-film-signs-poster-MADSMP0VTVc.jpg',
      genre: 'Category/Category',
      days,
      times,
    },
    {
      title: 'We Are All Lost',
      poster: 'https://marketplace.canva.com/MADLhaRMIrI/1/0/thumbnail_large-1/canva-red-beach-lost-boy-hoodie-lonely-film-movie-poster-MADLhaRMIrI.jpg',
      genre: 'Category',
      days,
      times,
    },
    {
      title: 'Secret Agency',
      poster: 'https://marketplace.canva.com/MADOPkpF1bw/1/0/thumbnail_large-1/canva-monochrome-agents-movie-poster--MADOPkpF1bw.jpg',
      genre: 'Category/Category',
      days,
      times,
    },
  ];
