import axios from "axios";

const Url= 'http://localhost:52419/api/';


export const datBan = (url = Url + 'DatBan/') => {
    return {
        fetchAllDatBan: () => axios.get(url),
        fetchByIdDatBan: maBan => axios.get(url + maBan),
        createDatBan: newMaBan => axios.post(url, newMaBan)
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