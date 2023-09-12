export default async function postUserData(itemId) {
    
    const dataPost = await fetch(`https://jsonplaceholder.typicode.com/
    posts?${itemId}`)
}