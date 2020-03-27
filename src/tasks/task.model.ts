import * as mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    task:{type:String,required:true},
    isFav:{type:Boolean},
    dateTime:{type:String}
})


export interface tasks{
    id: string;
    task : string; 
    isFav: boolean;
    dateTime:string;
}