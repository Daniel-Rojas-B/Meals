import Store from '../models/store.model.js';
// Create new store
async function createStore(req, res) {
    try {
        const newStore = await Store.create(req.body);
        res.json(newStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
// Retrieve all stores from the collection
async function getAllStores(req, res) {
    try {
        const allStores = await Store.find();
        res.json(allStores);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
// Retrieve a single store from the collection
async function getStoreById(req, res) {
    try {
        console.log(req.params.id)
        const oneStore = await Store.findById(req.params.id);        
        res.json(oneStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function updateOneStore(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedStore = await Store.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function deleteStoreById(req, res) {
    try {
        console.log(req.params.id)
        const deletedStore = await Store.findByIdAndDelete(req.params.id);
        res.json(deletedStore);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createStore, 
    getAllStores,
    getStoreById,
    updateOneStore,
    deleteStoreById
};