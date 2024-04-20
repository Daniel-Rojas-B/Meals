import { model, Schema } from 'mongoose';

const StoreSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Store name required!"],
            minlength: [3, "Store name must be at least 3 characters long!"],            
        },
        storeNumber: {
            type: Number,
            required: [true, "Store number required!"],
            min: [1, "Store Number must be greater than 0!"],
           
        },
        open: {
            type: Boolean,
            default: false            
        }       
        
    },
    { timestamps: true }
);
const Store = model("Store", StoreSchema);
export default Store;