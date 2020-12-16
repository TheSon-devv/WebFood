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

