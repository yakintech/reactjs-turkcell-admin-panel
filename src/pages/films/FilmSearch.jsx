import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FilmSearch() {

  const [search, setsearch] = useState("")
  const [films, setfilms] = useState([])


  useEffect(() => {

    axios.get(`https://www.omdbapi.com/?s=${search.trim().toLowerCase()}&apikey=58004eef`)
      .then(res => {
        setfilms(res.data.Search)
      })

  }, [search])

  


  return <>
    <div>
      <TextField size="medium" label="Search" onChange={(e) => setsearch(e.target.value)} />
    </div>
    <hr />

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Poster</th>
        </tr>
      </thead>
      <tbody>
        {
         films && films.map(item => <tr>
            <td>{item.Title}</td>
            <td>{item.Year}</td>
            <td><img src={item.Poster} width={200} height={300}></img></td>

          </tr>)
        }
      </tbody>
    </table>

  </>
}

export default FilmSearch