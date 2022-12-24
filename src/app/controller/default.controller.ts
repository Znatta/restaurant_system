import { Request, Response } from "express";

export class DefaultController {
  public handle(req: Request, res: Response) {
    res.status(200).send("Default route is working.");
  }
}
