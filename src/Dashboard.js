import React, {useState, useEffect} from 'react';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'dedd4b6c1a454ff290bcc9206cb7f2c2'
})
export default function Dashboard({code}) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    spotifyApi.searchTracks(search).then(res => {
      console.log(res)
    })
  }, [search, accessToken])
  
  return (
    <div className='container'>
      <form>
        <input className='form-control'
      typeof='search' 
      placeholder='Search Songs/ Artists' 
      value ={search} 
      onClick ={e => setSearch(e.target.value)}/>
      </form>
      <div className='song-section'>
        Songs
      </div>
      <div>
        Bottom
      </div>
    </div>
  )
}
