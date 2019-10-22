import Link from 'next/link'
import groq from 'groq'
import Head from '../components/Head'
import client from '../client'
import { prettyDate } from '../utils'

const Index = ({ posts = [] }) =>  (
  <div className="wrapper">
    <Head title={"Blog"} />
    <h1>Posts</h1>
    <ul className="post-list">
      {posts.map(
        ({ _id, title = '', slug = '', published = '' }) =>
          slug && (
            <li key={_id}>
              <span className="post-meta">{prettyDate(published)}</span>
              <Link href="/[slug]" as={`/${slug.current}`}>
                <a className="post-link">{title}</a>
              </Link>{' '}
            </li>
          )
      )}
    </ul>
  </div>
)

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && published < now()]|order(published desc)
  `)
})

export default Index