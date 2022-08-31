let car = {
    Suzuki: {
        "Cultus VXR 2022": {
            "Engine Displacement": "998 cc",
            "Fuel Supply System": "Petrol",
            "Max Horsepower/RPM": "67 hp @ 6000 RPM",
            "Transmission": "Manual",
            "Fuel Capacity (Litres)": "35 L",
            img: "Cultus.jpg",
        },
        "Wagon R AGS 2022": {
            "Engine Displacement": "998 cc",
            "Fuel Supply System": "EFI",
            "Max Horsepower/RPM": "67 hp @ 6200 RPM",
            "Transmission": "Manual",
            "Fuel Capacity (Litres)": "35 L",
            img: "WagonR.jpg",
        },
        "Alto VXL 2022": {
            "Engine Displacement": "658 cc",
            "Fuel Supply System": "Petrol",
            "Max Horsepower/RPM": "39 hp @ 6500 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "27 L",
            img: "Alto.jpg",
        },
        "Swift DLX 1.3L 2022": {
            "Engine Displacement": "1328 cc",
            "Fuel Supply System": "Petrol",
            "Max Horsepower/RPM": "90 hp @ 6000 RPM",
            "Transmission": "Manual",
            "Fuel Capacity (Litres)": "43 L",
            img: "Swift.jpg",
        },
    },
    Honda: {
        "Civic 1.8L i-VTEC CVT": {
            "Engine Displacement": "1799 cc",
            "Fuel Supply System": "PGM-FI",
            "Max Horsepower/RPM": "138 hp @ 6500 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "47 L",
            img: "civic.png",
        },
        "City 1.5L ASPIRE CVT 2022": {
            "Engine Displacement": "1497 cc",
            "Fuel Supply System": "PGM-FI",
            "Max Horsepower/RPM": "118 hp @ 6600 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "40 L",
            img: "City.jpg",
        },
        "BR-V i-VTEC MT 2022": {
            "Engine Displacement": "1498 cc",
            "Fuel Supply System": "EFI",
            "Max Horsepower/RPM": "117 hp @ 6600 RPM",
            "Transmission": "Manual",
            "Fuel Capacity (Litres)": "42 L",
            img: "BRV.jpg",
        },
    },
    Hyundai: {
        "Elantra GLS 2.0L 2022": {
            "Engine Displacement": "1999 cc",
            "Fuel Supply System": "PGM-FI",
            "Max Horsepower/RPM": "154 hp @ 6200 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "50 L",
            img: "Elantra.jpg",
        },
        "Tucson AWD A/T Ultimate 2022": {
            "Engine Displacement": "1999 cc",
            "Fuel Supply System": "PGM-FI",
            "Max Horsepower/RPM": "155 hp @ 6200 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "62 L",
            img: "Tucson.jpg",
        },
        "Sonata Fe GLS 2.4L 2022": {
            "Engine Displacement": "2400  cc",
            "Fuel Supply System": "EFI",
            "Max Horsepower/RPM": "170 hp @ 6000 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "71 L",
            img: "Santa.jpg",
        },
    },
    Kia: {
        "Sportage AWD 2022": {
            "Engine Displacement": "1999 cc",
            "Fuel Supply System": "Petrol",
            "Max Horsepower/RPM": "154 hp @ 6200 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "62 L",
            img: "sportage.jpg",
        },
        "Sorento 3.5 FWD 2022": {
            "Engine Displacement": "3342 cc",
            "Fuel Supply System": "EFI",
            "Max Horsepower/RPM": "276 hp @ 6000 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "58 L",
            img: "Sorento.jpg",
        },
        "Grand Carnival LX 2022": {
            "Engine Displacement": "3342 cc",
            "Fuel Supply System": "EFI",
            "Max Horsepower/RPM": "270 hp @ 6400 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "80 L",
            img: "Carnival.jpg",
        },
    },
    Toyota: {
        "Yaris ATIV X MT 1.5 2022": {
            "Engine Displacement": "1496 cc",
            "Fuel Supply System": "SFI",
            "Max Horsepower/RPM": "106 hp @ 6000 RPM",
            "Transmission": "Manual",
            "Fuel Capacity (Litres)": "42 L",
            img: "Yaris.jpg",
        },
        "Aqua L 1.5L 2022": {
            "Engine Displacement": "1496 cc",
            "Fuel Supply System": "EFI Hybrid Synergy",
            "Max Horsepower/RPM": "72 hp @ 4800 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "36 L",
            img: "Aqua.jpg",
        },
        "Corolla Altis CVT-i 1.8L 2022": {
            "Engine Displacement": "1598 cc",
            "Fuel Supply System": "SFI",
            "Max Horsepower/RPM": "138 hp @ 6400 RPM",
            "Transmission": "Automatic",
            "Fuel Capacity (Litres)": "55 L",
            img: "Altis.png",
        },
    },
}


let carCompany = document.getElementById("carCompany")
let carModal = document.getElementById("carModal")
let carDetails = document.getElementById("details")

function fillCompany() {
    let mainKeys = Object.keys(car)
    carCompany.innerHTML = ""
    for (let i = 0; i < mainKeys.length; i++) {
        carCompany.innerHTML += `<option value="${mainKeys[i]}">${mainKeys[i]}</option>`
    }
}
fillCompany()

function fillModal() {
    carModal.disabled = false
    // console.log(carCompany.value)
    let nestedKeys = Object.keys(car[carCompany.value])
    carModal.innerHTML = ""
    for (let i = 0; i < nestedKeys.length; i++) {
        carModal.innerHTML += `<option value="${nestedKeys[i]}">${nestedKeys[i]}</option>`
    }
}

function features() {
    let modalFeaturesKeys = Object.keys(car[carCompany.value][carModal.value])
    let modalFeaturesValues = Object.values(car[carCompany.value][carModal.value])
    carDetails.classList.add('container', 'border','shadow', 'mt-3', 'p-4', 'rounded')
    carDetails.style.backgroundColor = "#fff"
    carDetails.innerHTML = ""
    carDetails.innerHTML = `<h1 class="mb-3">${carCompany.value} ${carModal.value} Features:</h1>
    <img class="img-fluid" src="img/${modalFeaturesValues[5]}">`
    for (let i = 0; i < 5; i++) {
        carDetails.innerHTML += `
        <div class="features">
        <ul>
        <li><b>${modalFeaturesKeys[i]}</b> : ${modalFeaturesValues[i]}</li>
        </ul>
        </div>`
    }

}
