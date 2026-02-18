import { getSortedPostsData } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'Blog - All Posts',
  description: 'Browse all articles about software development, Python, Go, and web technologies',
}

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Posts</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {allPostsData.length} {allPostsData.length === 1 ? 'article' : 'articles'} about software engineering and learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
