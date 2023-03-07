/* Opretter vores class som er en slags template til objecter */

class Car {
    constructor(model, year, miles, price, url){
        this.model = model; 
        this.year = year;
        this.miles = miles;
        this.price = price || "ring for pris";
        this.url = url; 
    }
}

/* Opretter en class til at lave et array  */
class CarGallery{
    constructor(){
        this.cars = []
    }
    addCar(car){
        this.cars.push(car);
    }
}


/* Opretter et array med vores class til at holde vores objekter */
const bilGalleri = new CarGallery()

/* opretter objekter */
let myCar1 = new Car("Toyota Yaris", 2022, 2000 , 238900, "https://billeder.bilbasen.dk/bilinfo/8b73d914-519c-40ec-ae89-68de82bab932.jpeg?class=S1600X1600");
let myCar2 = new Car("Seat Ibiza", 2020, 18000, 189900,"https://billeder.bilbasen.dk/bilinfo/f627e464-2b5a-4698-9fcf-59eb4c3dd71b.jpeg?class=S1600X1600" );
let myCar3 = new Car("Skoda Citigo", 2013, 311781, 32995,"https://billeder.bilbasen.dk/bilinfo/5bb2d7b0-d144-49ee-bee0-11e41185b9f5.jpeg?class=S1600X1600");
let myCar4 = new Car("Ford Fiesta", 2004, 179000, 19000,"https://billeder.bilbasen.dk/bilinfo/339aea62-1b14-4ae7-b68e-8e98a7d9ad1d.jpeg?class=S1600X1600");

/* Smider dem ind i vores array */
bilGalleri.addCar(myCar1);
bilGalleri.addCar(myCar2);
bilGalleri.addCar(myCar3);
bilGalleri.addCar(myCar4);




/* Vi pakker tingene ind i en funktion så vi kan kalde det når vi har brug for det */
function writeData(){
let dataContainer = document.querySelector(".data-container");

/*Nedenstående linje sørger for at data containeren altid starter tom inden vi skriver data  */
dataContainer.innerHTML = "";


/* Looper over vores data  */
for(i = 0; i < bilGalleri.cars.length; i++){
    dataContainer.innerHTML += `
    <div class="flex-1 text-white text-center bg-gray-900 px-4 py-4 m-5 w-6/6 ">
        <h6 class="text-3xl p-4">${bilGalleri.cars[i].model}</h6>
            <img class="w-100 h-auto" src="${bilGalleri.cars[i].url}" alt="">
                <p class="text-xl p-4 text-white text-center">Modelår ${bilGalleri.cars[i].year}, ${bilGalleri.cars[i].miles.toLocaleString('da-DA')}km</p>
                    <p class="text-3xl mb-6">${bilGalleri.cars[i].price.toLocaleString('da-DA')}</p>
                        <button class="bg-blue-500 py-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Læs mere
                </button>
            </div>
    ` 
  }
}

/* kalder vores function så den rent faktisk bliver kørt */
writeData()


/* opgave 7 */


let priceInput = document.querySelector(".price-input");
let yearInput = document.querySelector(".year-input");
let modelInput = document.querySelector(".model-input");
let milesInput = document.querySelector(".miles-input");
let newCarBTN = document.querySelector(".newCarBTN");


newCarBTN.addEventListener("click", () => {
    /* Opretter nyt object med template fra vores class vigtigt er her rækkefølgen så input navn stemmer overens med template/class  */
    let myCar5 = new Car(modelInput.value, yearInput.value, milesInput.value, priceInput.value)
    bilGalleri.addCar(myCar5);
    
    /* Kalder vores write function igen så vi starter med ingen data 
    og derved automatisk opdatere dem ved klik og uden refresh */
    
    writeData()

})
