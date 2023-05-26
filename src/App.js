import { useState } from 'react'
import './App.css'
import İmageShow from './imageShow'

function getArray() {
  const newİmages = ['Resim1', 'Resim2', 'Resim3', 'Resim4', 'Resim5', 'Resim6']
  return newİmages
}

function App() {
  const [images, setİmages] = useState([])
  const handleClick = () => {
    setİmages([...getArray()])
  }
  return (
    <div className='App'>
      <button className='btn' onClick={handleClick}>
        RESİM EKLE
      </button>
      <div className='img'>
        {images.map((image) => {
          return <İmageShow imageName={image} />
        })}
      </div>
    </div>
  )
}

export default App
