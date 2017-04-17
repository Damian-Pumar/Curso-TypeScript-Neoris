namespace Transports {

    export interface ITransport {
        Run();
        Stop();
    }

    abstract class Transport implements ITransport {
        passengers: number;

        constructor(passengers: number) {
            this.passengers = passengers;
        }

        abstract Run();
        abstract Stop();
    }

    export class Car extends Transport {
        constructor(passengers: number) {
            super(passengers)

        }

        Run() {
            alert("Soy un Auto de " + this.passengers + " pasajeros.")
        }
        Stop() {
            alert("El auto se detuvo.");
        }
    }

    export class AirCraft extends Transport {
        constructor(passengers: number) {
            super(passengers)

        }

        Run() {
            alert("Soy un Avión de " + this.passengers + " pasajeros.")
        }
        Stop() {
            alert("El Avión se detuvo.");
        }
    }
}