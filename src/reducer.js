export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
    // token: "BQCdj2sHFUDUnZ1LRWmcpexuGIrmhJpiAQ-T42uq6G6fELB03PGdeMsqH9Br1lMNpluUDz9OMKruq1DhoLcLMGGqrgN1KL3T2O9Xb801aFjSs-abL-ArVHjzy2JmC5OLt1PvH7g87y4rwFH0C5ucS0Juoqvde8qi7uEHKWKqCJ-DKN65"
}

const reducer = (state, action) => {
    // console.log(action)

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
            case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };



    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
        default:
            return state;
    }
}

export default reducer 