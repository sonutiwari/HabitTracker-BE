import mongoose from  'mongoose';
import HabitDataModel, {habitSchema} from './habit.model';
export default interface UserModel {
    email: string;
    password: string;
    habits: HabitDataModel[]
}

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    habits: [{types: mongoose.Schema.Types.ObjectId, ref: habitSchema}]
})

export const userModel = mongoose.model('Users', userSchema);
