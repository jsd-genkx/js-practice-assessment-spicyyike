// 	[["░", "░", "O"],
//	["░", "O", "░"],
//	["░", "^", "░"]]
 const field = []
const row = 3
const column = 3
for (let i=0; i < row; i++) {
    const r = []
    //console.log(field)
    for (let j=0; j < column; j++) {
        r.push("O")
    }
    field.push(r)
}

console.log(field)
    