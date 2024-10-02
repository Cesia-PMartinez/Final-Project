class Cupcake {
    constructor(flavor, icing, size) {
        this.flavor = flavor;
        this.icing = icing;
        this.size = size;
    }

    describe() {
        return `This cupcake conatains ${this.flavor}, with icing ${this.icing} and size ${this.size}.`;
    }
}

class ChocolateCupcake extends Cupcake {
    constructor(size) {
        super('chocolate', 'chocolate', size);
    }
}

class VanillaCupcake extends Cupcake {
    constructor(size) {
        super('vainilla', 'vainilla', size);
    }
}

class StawberryCupcake extends Cupcake {
    constructor(size) {
        super('strawberry', 'queso crema', size);
    }
}

class CupcakeFactory {
    static createCupcake(type, size) {
        switch (type) {
            case 'chocolate':
                return new ChocolateCupcake(size);
            case 'vanilla':
                return new VanillaCupcake(size);
            case 'strawberry':
                return new StawberryCupcake(size);
            default:
                throw new Error('Not known!');
        }
    }
}

const cupcake1 = CupcakeFactory.createCupcake('chocolate', 'medium');
console.log(cupcake1.describe());

const cupcake2 = CupcakeFactory.createCupcake('vanilla', 'big');
console.log(cupcake2.describe());

const cupcake3 = CupcakeFactory.createCupcake('strawberry', 'small');
console.log(cupcake3.describe());
