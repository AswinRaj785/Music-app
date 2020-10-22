import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useGlobalValue } from './Stateprovider'


function App() {

  const spotify = new SpotifyWebApi()

  // const [token,settoken] = useState(null);
  const [{ user, token }, dispatch] = useGlobalValue()
  console.log("first value of token is " + token)
  useEffect(
    () => {
      const tokenobj = getTokenFromResponse()
      window.location.hash = ""
      const _token = tokenobj.access_token
      // console.log("i have token here:",_token)
      if (_token) {


        spotify.setAccessToken(_token);
        dispatch({
          type: "SET_TOKEN",
          token: _token
        })
        spotify.getMe().then((user) => {

          dispatch({
            type: "SET_USER",
            user: user
          }
          )

        })
        spotify.getPlaylist("63PhfRVHsuzfLyfQ1Ujmuv").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
        spotify.getUserPlaylists().then((playlists)=>{
          dispatch(
            {
              type:"SET_PLAYLISTS",
              playlists:playlists
            }
          )
        })

      }
      // console.log("i have token here:",token)
    }, [])
  console.log("i have token here:", token)
  console.log("Global user value here", user)
  return (
    <div className="app">

      {
        token ? <Player spotify ={spotify}/> : <Login></Login>
      }
    </div>
  );
}

export default App;
