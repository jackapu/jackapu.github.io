import Link from 'next/link'
import { PostMetadata } from '@/lib/posts'
import { format } from 'date-fns'

interface PostCardProps {
  post: PostMetadata
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-950">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
