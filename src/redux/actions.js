import axios from "axios";

export const updateState = () => {
  return dispatch => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=42f01084fe3a4ef9aec3d122da3baa21"
      )
      .then(response => {
        dispatch({
            type: "GET_ARTICLES",
            payload: response.data.articles
          })
        // dispatch(randomAction)
      })
      .catch(error => {
        console.error(error);
      });
  };
};


// const randomAction = () => {
//     return {

//     }
// }
