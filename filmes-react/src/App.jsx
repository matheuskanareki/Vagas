import { useState } from 'react'
import './App.css'

function App() {
  const username = 'Maria';
  const [count, setCount] = useState(0);
  const [filmList, setFilmList] = useState([
    {
    id: 1,
    name: "Star Treck",
    isFavorite: true,
    },

    {
    id: 2,
    name: "Avatar",
    isFavorite: false,
    },

     {
    id: 3,
    name: "Matrix",
    isFavorite: false,
    }

  ])

  function alternaFavorito (id) {
    const newFilList = filmList.map((film) => {
      if (film.id === id) {
        return{
          id: film.id,
          name: film.name,
          isFavorite: !film.isFavorite,
        }
      }

      return film;
    })

    setFilmList(newFilmList);
  }
   

  return (
    <div>
      <p className="hero">Bem-vindo {username}</p>
      <button 
        onClick={() => {
            
            setCount(count +1); 
          }
        }
      >
        Count: {count}
      </button>

        {
          filmList.map((film) => {
           return(
            <div>
              <p key={film}>{film.name}</p>
            <button onClick={() => alternaFavorito (film).id} >Favorito</button>
            </div>
          )
        })
      }

    </div>
    
  )
}

export default App
