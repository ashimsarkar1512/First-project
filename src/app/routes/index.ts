import { Router } from "express";
import { StudentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/user/user.route";

const router=Router()


const moduleRoute=[

            {
                        path:"/users",
                        route:userRoute,
            },
            {
                        path:"/students",
                        route:StudentRoute,
            },

]

moduleRoute.forEach((route)=>router.use(route.path,route.route))


export default router;