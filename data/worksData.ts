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
  {
    title: 'Manusia Silver: Sebuah Pengantar',
    description: `Manusia Silver: Sebuah Pengantar was the final presentation of the workshop entitled Body Journey, curated by Iwan Wijono. This focus group discussion (FGD) as happening art was held on 7 Desember 2021 at Cemeti:  Institute for Art and Society. The recorded audio of FGD was installed in Body Journey — 100 Years Joseph Beuys exhibition on 5-11 Desember 2021 at Cemeti Institute for Art and Society, with other artworks from other participants.`,
    imgSrc: '/static/images/manusia-silver/manusia-silver-sebuah-pengantar-1.jpeg',
    href: '/archive/performance-art/manusia-silver-sebuah-pengantar',
  },
  {
    title: 'Mautopia',
    description: `Involved as an actor at Indonesia Dramatic Reading Festival (IDRF)-Asian Playwrights Meeting; States of Crisis, reading Mautopia as one of the scripts presented in that event. IDRF 2019 involved scriptwriters from Cambodia, Indonesia, Japan, Malaysia, Philippines, Singapore, and Thailand. The Mautopia script is written by Ridhwan Saidi, an independent filmmaker and writer from Malaysia.`,
    imgSrc: '/static/images/mautopia/mautopia-1.jpeg',
    href: '/archive/performing-art/mautopia',
  },
]

export default worksData
