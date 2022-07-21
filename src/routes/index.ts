import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { SpecificationRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specification", SpecificationRoutes);

export { router };
