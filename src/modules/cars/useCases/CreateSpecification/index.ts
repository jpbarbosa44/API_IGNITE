import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUsecase";

const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateCategoryUseCase(
    specificationRepository
);

const createSpecificationController = new CreateCategoryController(
    createSpecificationUseCase
);

export { createSpecificationController };
