import express from "express";
import { register, login } from "../controllers/authController";
import { authMiddleware } from "../middleware/authMiddleware";
const router = express.Router();
console.log("REGISTER TYPE:", typeof register); // should be 'function'

router.post("/register", register);
router.post("/login", login);
router.get("/protected", authMiddleware, (req, res) => {
  res.send("You are authorized");
});
export default router;
