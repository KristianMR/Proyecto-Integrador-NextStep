import { useEffect, useState } from 'react'
import api from '../services/api'

function Carreras() {
  const [carreras, setCarreras] = useState([])

  useEffect(() => {
    api.get('/carreras')
      .then(res => setCarreras(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Carreras Disponibles</h1>
      <ul>
        {carreras.map(c => (
          <li key={c.id}>{c.nombre} - {c.descripcion}</li>
        ))}
      </ul>
    </div>
  )
}

export default Carreras
