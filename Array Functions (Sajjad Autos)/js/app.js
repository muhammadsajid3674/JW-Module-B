let car = [
    { name: "Suzuki", modal: "Cultus VXR 2022", Engine: "998 cc", FuelSystem: "Petrol", HorsepowerOrRPM: "67 hp @ 6000 RPM", Transmission: "Manual", FuelCapacity: "35 L", img: "Cultus.jpg", },
    { name: "Suzuki", modal: "Wagon R AGS 2022", Engine: "998 cc", FuelSystem: "EFI", HorsepowerOrRPM: "67 hp @ 6000 RPM", Transmission: "Manual", FuelCapacity: "35 L", img: "WagonR.jpg", },
    { name: "Suzuki", modal: "Alto VXL 2022", Engine: "658 cc", FuelSystem: "Petrol", HorsepowerOrRPM: "39 hp @ 6500 RPM", Transmission: "Automatic", FuelCapacity: "27 L", img: "Alto.jpg", },
    { name: "Suzuki", modal: "Swift DLX 1.3L 2022", Engine: "1328 cc", FuelSystem: "Petrol", HorsepowerOrRPM: "90 hp @ 6000 RPM", Transmission: "Manual", FuelCapacity: "43 L", img: "Swift.jpg", },
    { name: "Honda", modal: "Civic 1.8L i-VTEC CVT", Engine: "1799 cc", FuelSystem: "PGM-FI", HorsepowerOrRPM: "138 hp @ 6500 RPM", Transmission: "Automatic", FuelCapacity: "47 L", img: "civic.png", },
    { name: "Honda", modal: "City 1.5L ASPIRE CVT 2022", Engine: "1497 cc", FuelSystem: "PGM-FI", HorsepowerOrRPM: "118 hp @ 6600 RPM", Transmission: "Automatic", FuelCapacity: "40 L", img: "City.jpg", },
    { name: "Honda", modal: "BR-V i-VTEC MT 2022", Engine: "1498 cc", FuelSystem: "EFI", HorsepowerOrRPM: "117 hp @ 6600 RPM", Transmission: "Manual", FuelCapacity: "42 L", img: "BRV.jpg", },
    { name: "Hyundai", modal: "Elantra GLS 2.0L 2022", Engine: "1999 cc", FuelSystem: "PGM-FI", HorsepowerOrRPM: "154 hp @ 6200 RPM", Transmission: "Automatic", FuelCapacity: "50 L", img: "Elantra.jpg", },
    { name: "Hyundai", modal: "Tucson AWD A/T Ultimate 2022", Engine: "1999 cc", FuelSystem: "PGM-FI", HorsepowerOrRPM: "155 hp @ 6200 RPM", Transmission: "Automatic", FuelCapacity: "62 L", img: "Tucson.jpg", },
    { name: "Hyundai", modal: "Sonata Fe GLS 2.4L 2022", Engine: "2400 cc", FuelSystem: "EFI", HorsepowerOrRPM: "155 hp @ 6200 RPM", Transmission: "Automatic", FuelCapacity: "71 L", img: "Santa.jpg", },
    { name: "Kia", modal: "Sportage AWD 2022", Engine: "1999 cc", FuelSystem: "Petrol", HorsepowerOrRPM: "154 hp @ 6200 RPM", Transmission: "Automatic", FuelCapacity: "61 L", img: "sportage.jpg", },
    { name: "Kia", modal: "Sorento 3.5 FWD 2022", Engine: "3342 cc", FuelSystem: "EFI", HorsepowerOrRPM: "276 hp @ 6000 RPM", Transmission: "Automatic", FuelCapacity: "61 L", img: "Sorento.jpg", },
    { name: "Kia", modal: "Grand Carnival LX 2022", Engine: "3342 cc", FuelSystem: "EFI", HorsepowerOrRPM: "270 hp @ 6400 RPM", Transmission: "Automatic", FuelCapacity: "60 L", img: "Carnival.jpg", },
    { name: "Toyota", modal: "Yaris ATIV X MT 1.5 2022", Engine: "1496 cc", FuelSystem: "SFI", HorsepowerOrRPM: "106 hp @ 6000 RPM", Transmission: "Manual", FuelCapacity: "42 L", img: "Yaris.jpg", },
    { name: "Toyota", modal: "Aqua L 1.5L 2022", Engine: "1496 cc", FuelSystem: "EFI Hybrid Synergy", HorsepowerOrRPM: "72 hp @ 4800 RPM", Transmission: "Automatic", FuelCapacity: "36 L", img: "Aqua.jpg", },
    { name: "Toyota", modal: "Corolla Altis CVT-i 1.8L 2022", Engine: "1598 cc", FuelSystem: "SFI", HorsepowerOrRPM: "138 hp @ 6400 RPM", Transmission: "Automatic", FuelCapacity: "55 L", img: "Altis.png", },
]


let carCompany = document.getElementById("carCompany")
let carModal = document.getElementById("carModal")
let carDetails = document.getElementById("details")

function fillCompany() {
    carCompany.innerHTML = ""
    company = car.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.place === value.place && t.name === value.name
        ))
    )
    company.map(companyName => carCompany.innerHTML += `<option value="${companyName.name}">${companyName.name}</option>`)
}
fillCompany()

function fillModal() {
    carModal.disabled = false
    carModal.innerHTML = ""
    let companyName = carCompany.value
    let modalArr = car.filter(car => car.name === companyName)
    for (let i = 0; i < modalArr.length; i++) {
        carModal.innerHTML += `<option value="${modalArr[i].modal}">${modalArr[i].modal}</option>`
    }
}

function features() {
    let modalName = carModal.value
    let detailArr = car.filter(car => car.modal === modalName)
    carDetails.classList.add('container', 'border', 'shadow', 'mt-3', 'p-4', 'rounded')
    carDetails.style.backgroundColor = "#fff"
    carDetails.innerHTML = ""
    carDetails.innerHTML = `<h1 class="mb-3">${carCompany.value} ${carModal.value} Features:</h1>
    <img class="img-fluid" src="img/${detailArr[0].img}">`
    detailArr.map(function (details) {
        carDetails.innerHTML += `<ul>
            <li><b>Engine Displacement</b> : ${details.Engine}</li>
            <li><b>Fuel Supply System</b> : ${details.FuelSystem}</li>
            <li><b>Max Horsepower/RPM</b> : ${details.HorsepowerOrRPM}</li>
            <li><b>Transmission</b> : ${details.Transmission}</li>
            <li><b>Fuel Capacity (Litres)</b> : ${details.FuelCapacity}</li>
            </ul>`
    })
}


