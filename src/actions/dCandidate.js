import {dCandidate} from "./api";

export const ACTION_TYPE = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}
    
const formateData = data => ({
    ...data
})

export const fetchAll = () => dispatch => {
    dCandidate().fetchAll()
        .then(
            response => {
                console.log(response)
                dispatch({
                    type: ACTION_TYPE.FETCH_ALL,
                    payload: response.data
                })
            })
        .catch(err => console.log(err))

}

export const create = (data) => dispatch => {
    data = formateData(data)
    dCandidate().create(data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.CREATE,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
}

export const update = (maBan,data) => dispatch => {
    data = formateData(data)
    dCandidate().update(maBan,data)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.UPDATE,
                payload: {maBan,...data}
            })
        })
        .catch(err => console.log(err))
}

export const Delete = (maBan,data) => dispatch => {
    dCandidate().delete(maBan)
        .then(res => {
            dispatch({
                type : ACTION_TYPE.DELETE,
                payload: maBan
            })
        })
        .catch(err => console.log(err))
}