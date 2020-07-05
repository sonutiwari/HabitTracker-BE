
import mongoose from  'mongoose';

export default interface HabitDataModel {
    name: string;
    startDate: Date;
    duration: number;
    tracking: boolean[]
}

const Schema = mongoose.Schema;
export const habitSchema = new Schema({
    name: {type: String, required: true, unique: true},
    startDate: {type: Date, required: true},
    frequency: {type: String, enum: ['1', '2', '3', '4', '5', '6']},
    time: {type: String, required: true}
});

export const HabitModel = mongoose.model('Habits', habitSchema);
