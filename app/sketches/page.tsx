import sketchesData from '@/data/sketchesData'
import SketchesPageCard from '@/components/SketchesPageCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Sketches' })

export default function Sketches() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sketches
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 text-center flex flex-wrap">
            {sketchesData.map((d) => (
              <SketchesPageCard
                key={d.title}
                title={d.title}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

{/*
                  key={d.title}
                title={d.title}
                date={d.date}
                location={d.location}
                imgSrc={d.imgSrc}
                href={d.href}
*/}