import axios from "axios";

const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/"



export default {

    dCandidate(url = baseUrl + 'Books/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}