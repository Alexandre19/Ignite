import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'


export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Alexandre Borges"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, harum alias. Error in voluptatum recusandae veniam fuga deleniti libero maxime voluptatibus nulla perspiciatis, voluptatem quas, ad autem temporibus totam distinctio!"
          />
          <Post author="Alexandre Borges"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, harum alias. Error in voluptatum recusandae veniam fuga deleniti libero maxime voluptatibus nulla perspiciatis, voluptatem quas, ad autem temporibus totam distinctio!"
          />
        </main>
      </div>

    </div>
  )
}




