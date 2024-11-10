import { Router } from "express";
import { MemberControllers } from "./member.controllers";

const router: Router = Router();

router.post('/', MemberControllers.createMember);

export const MemberRoutes = router;