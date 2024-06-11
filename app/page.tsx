import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allArchives } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allArchives)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
