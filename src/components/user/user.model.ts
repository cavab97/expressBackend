import mongoose from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String },
  name: { type: String },
  password: { type: String },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
  ],
});

const UserModel = mongoose.model<IUser>('User', userSchema);

// eslint-disable-next-line import/prefer-default-export
export { UserModel };