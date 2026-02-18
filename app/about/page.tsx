export const metadata = {
  title: 'About - DevBlog',
  description: 'Learn more about me and what I do',
}

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Hi! I'm a software engineer working in logistics, passionate about building efficient systems and sharing knowledge.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
            <p>
              I work primarily with Python (Django) and Go, building backend systems that power logistics operations. 
              I also enjoy frontend development and database optimization, always looking for ways to improve performance and user experience.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why This Blog?</h2>
            <p>
              This blog serves as my personal knowledge base and portfolio. I write about:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Software engineering best practices</li>
              <li>Python and Django development</li>
              <li>Go programming and concurrency</li>
              <li>Database optimization and SQL</li>
              <li>Frontend development with modern frameworks</li>
              <li>Lessons learned from real-world projects</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Tech Stack</h2>
            <p>
              The technologies I work with regularly:
            </p>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="text-sm space-y-1">
                  <li>Python & Django</li>
                  <li>Go</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-sm space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Get in Touch</h2>
            <p>
              Feel free to reach out if you want to discuss technology, collaborate on projects, or just chat!
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/jackapu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/zeyuanpu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:apuaimanlian@example.com"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
