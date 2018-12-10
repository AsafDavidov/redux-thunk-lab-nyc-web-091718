const fetchCats = ()=>{
    return (dispatch)=>{
    dispatch({type: "LOADING_CATS"});

    return fetch('http://localhost:4000/db').then(response => response.json())
    .then(responseJSON => {
    const cats = responseJSON.images
    return dispatch({type:"FETCH_CATS", cats})
    })
  }
}
