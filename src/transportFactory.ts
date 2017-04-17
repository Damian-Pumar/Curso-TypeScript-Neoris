namespace Factory {

    export class TransportFactory implements ITransportFactory {

        Transport: Transports.ITransport;

        CreateCar() {
            if (this.IsValidPassengers()) {
                this.Transport = new Transports.Car(this.GetPassengers());

                this.ShowButtons();
            }

            return this.Transport;
        };

        CreateAircraft() {
            if (this.IsValidPassengers()) {
                this.Transport = new Transports.AirCraft(this.GetPassengers());

                this.ShowButtons();
            }

            return this.Transport;
        };

        private IsValidPassengers() {
            var passengers = this.GetPassengers();

            if (passengers > 0) {
                return true;
            }

            alert("Debe ingresar una cantidad de pasajeros, mayor a cero.");
        }

        private GetPassengers(): number {
            return (<HTMLInputElement>document.getElementById("passengers")).valueAsNumber;
        }

        private ShowButtons() {
            (<HTMLInputElement>document.getElementById("run")).hidden = false;

            (<HTMLInputElement>document.getElementById("stop")).hidden = false;
        }
    }

    export interface ITransportFactory {
        CreateCar();

        CreateAircraft();
    }
}