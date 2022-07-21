import { Specification } from "../../model/Specification";
import { ICreateCategoryDTO } from "../ICategoriesRepository";
import { ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    constructor() {
        this.specifications = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}

export { SpecificationRepository };
