const controller = new AbortController()
export default async function getUserAll() {
    
    const data = await fetch('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})

    if(!data.ok) return () => controller.abort()
    
    return data.json()
}