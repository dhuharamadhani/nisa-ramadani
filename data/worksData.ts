interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const worksData: Project[] = [
  {
    title: 'Belajar Menjadi Laki-laki',
    description: `"Gelar Pantomim Taman Budaya Yogyakarta" carries the grand theme, "Pantomim dan Api Gagasan." New ideas from the younger generation will enliven pantomime performances, both in its form and content. From this young generation, the Fire of Ideas will continue to flare. It becomes the spirit to create new works and plan future agendas.`,
    imgSrc: '/static/images/belajar-menjadi-laki-laki/belajar-menjadi-laki-laki-1.jpeg',
    href: '/archive/performing-art/belajar-menjadi-laki-laki',
  },
  {
    title: 'The Unseen Self',
    description: `A work-in-progress photo performance art, an experiment about self-gaze. The Unseen Self  has been exhibited on "Presentasi Preposisi: Gotong Royong untuk Seni dan Kesetaraan", 15-24 August 2022 at Institut Français Indonesia, Yogyakarta.`,
    imgSrc: '/static/images/the-unseen-self/the-unseen-self-1.jpeg',
    href: '/archive/performance-art/the-unseen-self',
  },
  {
    title: 'What I Think About When I Think About It',
    description: `A durational performance art using white strings, presented in Proyek Edisi Head Quarter, RT 01, Dusun Jeblok, Dukuh 3, Tirtonirmolo, Kasihan, Bantul Regency, 55181. This performance art was held on 17 September 2022, from 10.30 am to 18.30 pm (total duration is eight hours).`,
    imgSrc: '/static/images/what-i-think-about-when-i-think-about-it/what-i-think-about-when-i-think-about-it-1.jpeg',
    href: '/archive/performance-art/what-i-think-about-when-i-think-about-it',
  },
]

export default worksData
