
import { z } from 'zod';

const userValidationSchema=z.object(
{
          
            password:z.string({
                        invalid_type_error:'password must be requered'
            }).max(20,{message:'password can not be more than 20 characters'}),
            needsPasswordChange:z.boolean().optional().default(true).optional(),
           
           
}
)

export const userValidation={
userValidationSchema
}