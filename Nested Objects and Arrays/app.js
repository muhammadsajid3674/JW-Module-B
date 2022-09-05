// Nested array print code
let arr = [
    [
        [
            [
                [
                    "End Array!"
                ]
            ]
        ]
    ]
]

let endArr = [arr[0][0][0][0]]
console.log(endArr)

// Nested object print code

let obj = {
    first: {
        second: {
            third: {
                forth: {
                    value: "End Object!"
                }
            }
        }
    }
}

let endObj = { ...obj.first.second.third.forth }
console.log(endObj)