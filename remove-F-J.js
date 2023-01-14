


let array = ["Roma", "Rusik", "Farida", "Zoya", "Jamilya","Leyla"]

console.log(removeItems(array))

function removeItems(array) {

  let newArray = []

  array.forEach(item => {

     if (item.charAt(0) != "F" && item.charAt(0) != "J") {
      
      newArray.push(item)

    }
  }); 
  return newArray
}
