import express from "express";
import {
  createProvider,
  getAllProviders,
  getProviderById,
  updateProvider,
  deleteProvider,
} from "../controllers/serviceProviderController";
import { authMiddleware } from "../middleware/authMiddleware";
import { checkRole } from "../middleware/checkRole";
import { checkOwensershipRole } from "../middleware/chechOwenershipRole";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  checkRole("admin", "provider"),
  createProvider
);
router.get("/", getAllProviders);
router.get("/:id", getProviderById);
router.put("/:id", authMiddleware, checkOwensershipRole, updateProvider);
router.delete("/:id", authMiddleware, checkOwensershipRole, deleteProvider);
export default router;
