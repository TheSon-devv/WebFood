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

// export const createMonAn = (data) => dispatch => {
//     data = formatData(data)
//     monAn().createMonAn(data)
//         .then(
//             res => {
//                 dispatch({
//                     type: ACTION_TYPE_MON_AN.CREATE_MON_AN,
//                     payload: res.data
//                 })
//             }
//         )
//         .catch(err => console.log(err))
// }

// export const updateMonAn = (maMonAn,data) => dispatch => {
//     data = formatData(data)
//     monAn().updateMonAn(maMonAn,data)
//         .then(
//             res => {
//                 dispatch({
//                     type: ACTION_TYPE_MON_AN.UPDATE_MON_AN,
//                     payload: {maMonAn,...data}
//                 })
//             }
//         )
//         .catch(err => console.log(err))
// }

// export const DeleteMonAn = (maMonAn) => dispatch => {
//     monAn().deleteMonAn(maMonAn)
//         .then(
//             res => {
//                 dispatch({
//                     type: ACTION_TYPE_MON_AN.DELETE_MON_AN,
//                     payload: maMonAn
//                 })
//             }
//         )
//         .catch(err => console.log(err))
// }
