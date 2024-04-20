import { Router } from "express"
import { createStore, getAllStores, getStoreById, updateOneStore, deleteStoreById } from "../controllers/store.controller.js";

const router = Router();

router.route("/")
    .post(createStore)
    .get(getAllStores)

router.route("/stores/:id")
    .get(getStoreById)
    .put(updateOneStore)
    .delete(deleteStoreById)


export default router;