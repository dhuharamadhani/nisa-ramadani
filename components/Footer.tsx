import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <Link href="https://x.com/dhuhar">{siteMetadata.dev}</Link>
        </div>
        <div className="mb-2 flex space-x-2 text-xs text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE">{siteMetadata.timlrx}</Link>
          <div>{` & `}</div>
          <Link href="https://github.com/Th1nhNg0/thinhcorner.com">{siteMetadata.Th1nhNg0}</Link>
        </div>
      </div>
    </footer>
  )
}
