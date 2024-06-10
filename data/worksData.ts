interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const worksData: Project[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'What I Think About When I Think About It',
    description: `A durational performance art using white strings, presented in Proyek Edisi Head Quarter, RT 01, Dusun Jeblok, Dukuh 3, Tirtonirmolo, Kasihan, Bantul Regency, 55181. This performance art was held on 17 September 2022, from 10.30 am to 18.30 pm (total duration is eight hours).`,
    imgSrc: '/static/images/what-i-think-about-when-i-think-about-it/what-i-think-about-when-i-think-about-it-1.jpeg',
    href: '/blog/what-i-think-about-when-i-think-about-it',
  },
]

export default worksData
