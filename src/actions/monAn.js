import { monAn } from "./api";

export const ACTION_TYPE_MON_AN = {
    CREATE_MON_AN: 'CREATE',
    UPDATE_MON_AN: 'UPDATE',
    DELETE_MON_AN: 'DELETE',
    FETCH_ALL_MON_AN: 'FETCH_ALL_MON_AN'
}

const formatData = data => ({
    ...data
})

export const fetchAllMonAn = () => dispatch => {
    monAn().fetchAllMonAn()
        .then(
            res => {
                console.log(res)
                dispatch({
                    type: ACTION_TYPE_MON_AN.FETCH_ALL_MON_AN,
                    payload: res.data
                })
            }
        )
        .catch(err => console.log(err))
}

export const create = (data) => dispatch => {
    data = formatData(data)
    monAn().create(data)
        .then(
            res => {
                dispatch({
                    type: ACTION_TYPE_MON_AN.CREATE_MON_AN,
                    payload: res.data
                })
            }
        )
        .catch(err => console.log(err))
}

export const update = (id,data) => dispatch => {
    data = formatData(data)
    monAn().update(id,data)
        .then(
            res => {
                dispatch({
                    type: ACTION_TYPE_MON_AN.UPDATE_MON_AN,
                    payload: {id,...data}
                })
            }
        )
        .catch(err => console.log(err))
}

export const Delete = (id) => dispatch => {
    monAn().delete(id)
        .then(
            res => {
                dispatch({
                    type: ACTION_TYPE_MON_AN.DELETE_MON_AN,
                    payload: id
                })
            }
        )
        .catch(err => console.log(err))
}
