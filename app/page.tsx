import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default function Home() {
  const allPostsData = getSortedPostsData()
  const featuredPosts = allPostsData.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Welcome to My Dev Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Sharing insights on software engineering, Python, Go, and web development
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/blog"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Read Articles
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Recent Posts</h2>
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {['Python', 'Django', 'Go', 'JavaScript', 'React', 'Next.js', 'PostgreSQL', 'Docker'].map((tech) => (
              <div key={tech} className="text-center p-6 bg-white dark:bg-gray-950 rounded-lg border hover:border-primary-500 transition-colors">
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
