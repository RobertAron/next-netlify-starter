import Link from 'next/link'

export default function Success() {
    return (
        <div>
            <p>Your form has been succcessfully submitted!</p>
            <Link href='/'>
                <a>Go back home!</a>
            </Link>
        </div>
    )
}