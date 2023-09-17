import Link from 'next/link'


interface textInterface {
    index: number
    sura: number,
    sura_name: string,
    aya: number,
    text: string,
    page: number
}

interface packInterface {
    "pack": textInterface[];
}



export default function PostList(prop: packInterface) {
    return (
        <ul>
            {prop.pack.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}