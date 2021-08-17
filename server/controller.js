const houses = require('./db.json')
const globalId = 4

module.exports = {
getAllHouses: (req, res) => {

    res.status(200).send(houses)

},
deleteHouse: (req, res) => {
    let index = houses.findIndex[elem => elem.id === +req.params.id]
    houses.splice(index, 1)
    // console.log('Trying')
    res.status(200).send(houses)

},
createHouse: (req, res) => {
    let {address, price, imageURL} = req.body
    let newHouse = {
        id: globalId,
        address,
        price,
        imageURL
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    globalId++
    
},
updateHouse: (req, res) => {
    let {id} = req.params
    let {type} = req.body

    let index = houses.findIndex(elem => elem.id === +id)

    if(houses[index].price === 0 && type === 'minus'){
        res.status(400).send("You're giving it away for free?! I'll take it. 8017810145")
    } else if (type === 'plus'){
        houses[index].price += 10000
        res.status(200).send(houses)
    } else if (type === 'minus'){
        houses[index].price -= 10000
        res.status(200).send(houses)
    } else {
        res.status(400).send('What is going on?')
    }

    // if(movies[index].rating === 5 && type === 'plus'){
    //     res.status(400).send("Sorry bud, can't go any higher than that.")
    // } else if (movies[index].rating === 0 && type === 'minus'){
    //     res.status(400).send('Way too low')
    // } else if (type === 'plus') {
    //     movies[index].rating++
    //     res.status(200).send(movies)
    // } else if (type === 'minus'){
    //     movies[index].rating--
    //     res.status(200).send(movies)
    // } else {
    //     res.status(400).send( 'Something happened! :(' )
    // }
}
}