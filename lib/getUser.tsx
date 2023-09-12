async function getUser(itemID) {
    const getData = await fetch(`https://jsonplaceholder.typicode.com/users/${itemID}`)
    
    return getData.json()
}