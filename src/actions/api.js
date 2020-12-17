import axios from "axios";

const dCandidateUrl = 'http://localhost:52419/api/';


export const dCandidate = (url = dCandidateUrl + 'DCandidates/') => {
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id)
    }
}

export const userPostFetch = user => {
  return dispatch => {
    return fetch(dCandidateUrl + 'DCandidates/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})
