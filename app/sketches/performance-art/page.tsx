import performanceArtSketchesData from '@/data/performanceArtSketchesData'
import SketchesCard from '@/components/SketchesCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Performance Art Sketches' })

export default function PerformanceArtSketches() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Performance Art Sketches
          </h1>
        </div>
        <div className="container py-12">
          <div className="place-content-center -m-4 flex flex-wrap">
            {performanceArtSketchesData.map((d) => (
              <SketchesCard
                key={d.title}
                title={d.title}
                date={d.date}
                location={d.location}
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
