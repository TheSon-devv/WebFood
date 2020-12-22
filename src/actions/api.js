import axios from "axios";

const Url= 'http://localhost:52419/api/';


export const dCandidate = (url = Url + 'DatBan/') => {
    return {
        fetchAll: () => axios.get(url),
        fetchById: maBan => axios.get(url + maBan),
        create: newBan => axios.post(url, newBan),
        update: (maBan, updateBan) => axios.put(url + maBan, updateBan),
        delete: maBan => axios.delete(url + maBan)
    }
}

export const monAn = (url = Url + 'MonAn/') => {
    return {
        fetchAllMonAn: () => axios.get(url),
        fetchByIdMonAn: maMonAn => axios.get(url + maMonAn),
        createMonAn: newMonAn => axios.post(url, newMonAn),
        updateMonAn: (maMonAn, updateMonAn) => axios.put(url + maMonAn, updateMonAn),
        deleteMonAn: maMonAn => axios.delete(url + maMonAn)
    }
}