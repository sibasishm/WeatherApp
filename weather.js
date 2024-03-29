class Weather {
    constructor(city) {
        this.apiKey = '63bb399b7af7043484dcd118d64da093';
        this.city = city;
    }

    //Fetch weather from API
    getWeather() {
        return new Promise((resolve, reject) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    //Fetch city names from local JSON file
    getCities() {
        return new Promise((resolve, reject) => {
            fetch('./data.json')
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    //Change the location
    changeLocation(city) {
        this.city = city;
    }
}