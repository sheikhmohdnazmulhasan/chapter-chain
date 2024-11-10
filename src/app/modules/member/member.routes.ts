import { Router } from "express";
import { MemberControllers } from "./member.controllers";

const router: Router = Router();

router.post('/', MemberControllers.createMember);
router.get('/', MemberControllers.readAllMember);
router.get('/:memberId', MemberControllers.readSpecificMemberById);

export const MemberRoutes = router;