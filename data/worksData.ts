interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const worksData: Project[] = [
  {
    title: 'The Unseen Self',
    description: `A work-in-progress photo performance art, an experiment about self-gaze. The Unseen Self  has been exhibited on Presentasi Preposisi: Gotong Royong untuk Seni dan Kesetaraan, 15-24 August 2022 at Institut Français Indonesia, Yogyakarta.`,
    imgSrc: '/static/images/the-unseen-self/the-unseen-self-1.jpeg',
    href: '/blog/the-unseen-self',
  },
  {
    title: 'What I Think About When I Think About It',
    description: `A durational performance art using white strings, presented in Proyek Edisi Head Quarter, RT 01, Dusun Jeblok, Dukuh 3, Tirtonirmolo, Kasihan, Bantul Regency, 55181. This performance art was held on 17 September 2022, from 10.30 am to 18.30 pm (total duration is eight hours).`,
    imgSrc: '/static/images/what-i-think-about-when-i-think-about-it/what-i-think-about-when-i-think-about-it-1.jpeg',
    href: '/blog/what-i-think-about-when-i-think-about-it',
  },
]

export default worksData
