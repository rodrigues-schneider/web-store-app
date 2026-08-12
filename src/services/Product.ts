import makerID from "./MakerID";

export class Product {
    id: string;
    name: string;
    description?: string;
    value: number;
    type: string;

    constructor(name: string, description: string, value: number, type: string) {
        this.id = makerID(name, type);
        this.name = name;
        this.description = description;
        this.value = value;
        this.type = type;
    }

    setName(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setValue(value: number) {
        this.value = value;
    }

    setType(type: string) {
        this.type = type;
    }

} 