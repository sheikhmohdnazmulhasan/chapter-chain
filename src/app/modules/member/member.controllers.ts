import { Member } from "@prisma/client";
import { MemberServices } from "./member.services";
import { Request, Response } from "express";

async function createMember(req: Request, res: Response) {

    try {
        const result = await MemberServices.createMemberIntoDb(req.body as Member);
        res.status(result.status).json(result)

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: "Internal server error"
        });
    }
};

export const MemberControllers = {
    createMember
}