import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
})

function getAllStores() {
    return http.get('/')
    .then(response => response.data)
    .catch(err => {
        throw err;
    });
}

function updateOneStore(store) {
    return http.put(`/stores/edit/${store._id}`,store)
    .then(response => response.data)
    .catch(err => {
        throw err;
    });
}

function addOneStore(store) {
    return http.post('/',store)
    .then(response => response.data)
    .catch(err => {
        throw err;
    });
}

function getOneStore(store) {
    return http.get(`/stores/${store._id}`)
    .then(response => response.data)
    .catch(err => {
        throw err;
    });
}

function deleteOneStore(store) {
    return http.delete(`/stores/${store._id}`)  
    
    .then(response => response.data)
    .catch(err => {
        throw err;
    });
}

// function deleteOneMeal(meal) {
//     return http.delete(`/meals/${meal._id}`)
//     .then(response => response.data)
//     .catch(err => {
//         throw err;
//     });
// }

export {
    getAllStores,
    updateOneStore,
    getOneStore,
    deleteOneStore,
    addOneStore
}