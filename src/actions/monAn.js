import { monAn } from "./api";

export const ACTION_TYPE_MON_AN = {
    CREATE_MON_AN: 'CREATE_MON_AN',
    UPDATE_MON_AN: 'UPDATE_MON_AN',
    DELETE_MON_AN: 'DELETE_MON_AN',
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

export const createMonAn = (data) => dispatch => {
    data = formatData(data)
    monAn().createMonAn(data)
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

export const updateMonAn = (id,data) => dispatch => {
    data = formatData(data)
    monAn().updateMonAn(id,data)
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

export const DeleteMonAn = (id) => dispatch => {
    monAn().deleteMonAn(id)
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
