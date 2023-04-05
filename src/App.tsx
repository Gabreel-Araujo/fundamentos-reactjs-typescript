import { Post,PostType } from "./components/Post";
import { Header } from "./components/Header";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

import './global.css'


const posts: PostType[] = [
  
  {
    id:1,
    author:{
      avatarUrl: "https://github.com/gabreel-araujo.png",
      name: "Gabriel Alves",
      role: "web-development"
    },
    content: [
      {type: 'paragraph',content: 'Fala galeraa 👋'},
      {type: 'paragraph',content:  'Acabei de subir mais um projeto no meu portifa. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:' #jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-03 14:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego",
      role: "CTO and web-development"
    },
    content: [
      {type: 'paragraph',content: 'Fala galeraa 👋'},
      {type: 'paragraph',content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:' #jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-6 20:00:00'),
  },
];

export function App() {

  return (
    <div>

      <Header/>
     
      <div className={styles.wrapper}>
        <Sidebar/>
       
        <main>
          {posts.map(post =>{
            return (
            
            <Post 
            key={post.id}
            post={post}
            />
           
            
            )
          })}
        </main>
      </div>

    </div>
  )
}


