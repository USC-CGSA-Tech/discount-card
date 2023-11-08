import Link from "next/link"

type HeaderProps = {
    path: string
}

export default function Header({ path }: HeaderProps) {
    return (
        <header>
            <div className="flex justify-between">
                <Link href={path}><img src="/back.svg" alt="back" className="m-6"/></Link>
                <img src="/logo.svg" alt="logo" className="m-5"/>
                <img src="/search.svg" alt="search" className="m-6"/>
            </div>
        </header>
    )
}