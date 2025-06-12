import { Request, Response } from "express";
import { getAtedimentos } from "../models/atendimentoModel.ts";


export async function getAllAtedimentos(req: Request, res: Response): Promise<void> {
    const atendimentos = await getAtedimentos();
    res.status(200).json(atendimentos);
};

