import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bycript from 'bcrypt';
 
const userSchema =new Schema<TUser>(
{  id:{
            type:String,
            required:true,
},
password:{
            type:String,
            required:true,
},
needsPasswordChange:{
            type:Boolean,
            default:true,
},
role:{
            type:String,
            enum:['student','faculty','admin']
},
status:{
            type:String,
            enum:['in-progress','blocked'],
            default:'in-progress'
}

},{
            timestamps:true,
})



// creating middleware

userSchema.pre('save', async function (next) {
            // console.log(this,'pre hook:we will save data');
          
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const user = this;
          
            // hassing password and save into db
          
            user.password = await bycript.hash(
              user.password,
              Number(config.bcrypt_salts_rounds),
            );
            next();
          });
          
          userSchema.post('save', function (doc, next) {
            doc.password = '';
            next();
          });
          


export const User=model<TUser>('user',userSchema)