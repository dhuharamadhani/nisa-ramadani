'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Archive } from 'contentlayer/generated'

export const CompleteSearch = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        onSearchDocumentsLoad(json: CoreContent<Archive>[]) {
            return json.map((post: CoreContent<Archive>) => ({
              id: post.path,
              name: post.title,
              keywords: post.bodyRaw || '',
              section: 'Archive',
              subtitle: post.tags.join(', '),
              perform: () => router.push('/' + post.path),
            }));
          }          
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}