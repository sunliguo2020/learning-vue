export default function Car(Color, Year, Make, Miles) {
    this.color = Color;
    this.year = Year;
    this.make = Make;
    this.odometerReading = Miles;

    this.setOdometer = function (newMiles){
        this.odometerReading = newMiles;
    }
}