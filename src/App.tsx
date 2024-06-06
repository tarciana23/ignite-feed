import { Post } from './components/Post'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tarciana23.png',
      name: 'Tarciana Oliveira',
      role: 'Developer Web'
    },
    content: [
      {type: 'paragraph' as 'paragraph', content: 'Olá pessoal! 👋'},
      {type: 'paragraph' as 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz na trilha de fullstack da Rocketseat. O nome do projeto é RocketNotes 🚀'},
      {type: 'link' as 'link', content: '👉 https://github.com/tarciana23/RocketNotes' },
    ],
    publishedAt: new Date('2024-05-25 20:28:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/EmersonLima1.png',
      name: 'Emerson Lima',
      role: 'Data Scientist'
    },
    content: [
      {type: 'paragraph' as 'paragraph', content: '🚀✨ Novo projeto no GitHub! ✨🚀'},
      {type: 'paragraph' as 'paragraph', content: 'Quero compartilhar com vocês meu projeto mais recente, focado em aprimorar minhas habilidades em SQL com Python usando SQLite. 💻🐍'},
      {type: 'paragraph' as 'paragraph', content: 'Confira o projeto no GitHub! Feedbacks e sugestões são sempre bem-vindos!'},
      {type: 'link' as 'link', content: '👉 https://lnkd.in/dFagwhnX' },
      {type: 'link' as 'link', content: '#DataScience' },
      {type: 'link' as 'link', content: '#SQLite' },
      {type: 'link' as 'link', content: '#TMDb' },
    ],
    publishedAt: new Date('2024-05-20 20:28:00')
  }
]

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
