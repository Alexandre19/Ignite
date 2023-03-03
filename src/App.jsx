import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Alexandre19.png',
      name: 'Alexandre Borges',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de criar mais um projeto para o meu portfólio, assim que vocês puderem deem uma olhada lá e me falem o que acharam.' },
      { type: 'link', content: 'alexandre.dev@gmail' },
    ],
    publishedAt: new Date('2022-10-28 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de criar mais um projeto para o meu portfólio, assim que vocês puderem deem uma olhada lá e me falem o que acharam.' },
      { type: 'link', content: 'alexandre.dev@gmail' },
    ],
    publishedAt: new Date('2022-10-19 20:00:00')
  },
];


export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}




