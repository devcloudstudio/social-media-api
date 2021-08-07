import { Router, Request, Response } from "express";
import User from "../models/User";

const router = Router();

// register user
router.get("/register", async (req: Request, res: Response) => {
  const user = new User({
    username: "haki",
    email: "fred@gmail.com",
    password: "hakifred",
  });

  await user.save();
  res.send("Ok");
});

export default router;
