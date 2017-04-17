class Main {

    static Factory: Factory.ITransportFactory;

    static Load() {
        Main.Factory = new Factory.TransportFactory();
    }
}

window.onload = () => {
    Main.Load();
}