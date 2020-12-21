import axios from "axios";

const Url= 'http://localhost:52419/api/';


export const dCandidate = (url = Url + 'NhaHang/') => {
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id)
    }
}

export const monAn = (url = Url + 'MonAn/') => {
    return {
        fetchAllMonAn: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id)
    }
}