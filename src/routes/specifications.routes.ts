import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";

const SpecificationRoutes = Router();

SpecificationRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res);
});

export { SpecificationRoutes };
