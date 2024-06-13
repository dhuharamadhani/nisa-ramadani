interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const worksData: Project[] = [
  {
    title: 'What I Think About When I Think About It',
    description: `A durational performance art using white strings, presented in Proyek Edisi Head Quarter, RT 01, Dusun Jeblok, Dukuh 3, Tirtonirmolo, Kasihan, Bantul Regency, 55181. This performance art was held on 17 September 2022, from 10.30 am to 18.30 pm (total duration is eight hours).`,
    imgSrc: '/static/images/what-i-think-about-when-i-think-about-it/what-i-think-about-when-i-think-about-it-1.jpeg',
    href: '/archive/performance-art/what-i-think-about-when-i-think-about-it',
  },
  {
    title: 'The Unseen Self',
    description: `A work-in-progress photo performance art, an experiment about self-gaze. The Unseen Self  has been exhibited on "Presentasi Preposisi: Gotong Royong untuk Seni dan Kesetaraan", 15-24 August 2022 at Institut Français Indonesia, Yogyakarta.`,
    imgSrc: '/static/images/the-unseen-self/the-unseen-self-1.jpeg',
    href: '/archive/performance-art/the-unseen-self',
  },
  {
    title: 'Mencari Kabar',
    description: `Mencari Kabar is a long-term project based on Krisis Moneter 1998 issues, on this first presentation, the artwork was mainly divided into three phases; collecting archives (Kedaulatan Rakyat newspaper) about Krisis Moneter 1998, making video performances based on the selected archives, and distributed the selected archives into blockchain network (100% on-chain). `,
    imgSrc: '/static/images/mencari-kabar/mencari-kabar-1.webp',
    href: '/archive/performance-art/mencari-kabar',
  },
  {
    title: 'The Brief History of Dance',
    description: `Presented as a part of OPENLAB X CABARET CHAIRIL event, held on Saturday, 19 February 2022 at Teater Garasi/Garasi Performance Institute. The Brief History of Dance was directed by Andreas Ari Dwianto (Inyong). This work-in-progress involved 6 actors: Erythrina Baskoro, Irfan Hakim, Michael Eduard Gaja Seto, Nisa Ramadani, Putri Lestari, and Wijil Rachmadhani.`,
    imgSrc: '/static/images/the-brief-history-of-dance/the-brief-history-of-dance-1.jpeg',
    href: '/archive/performing-art/the-brief-history-of-dance',
  },
]

export default worksData
