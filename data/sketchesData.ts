interface Sketches {
    title: string,
    href?: string,
    imgSrc?: string,
  }
  
  const sketchesData: Sketches[] = [
    {
      title: 'Performance Art',
      imgSrc: '/static/images/sketches/performance-art.jpg',
      href: '/sketches/performance-art',
    },
    {
      title: 'Drawing',
      imgSrc: '/static/images/sketches/drawing.jpg',
      href: '/coming-soon',
    },
    {
      title: 'Body Improvisation',
      imgSrc: '/static/images/sketches/body-improvisation.jpg',
      href: '/coming-soon',
    },
  ]
  
  export default sketchesData
  