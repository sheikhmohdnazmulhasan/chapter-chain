import { Router } from "express";
import { MemberControllers } from "./member.controllers";

const router: Router = Router();

router.post('/', MemberControllers.createMember);
router.get('/', MemberControllers.readAllMember);

export const MemberRoutes = router;