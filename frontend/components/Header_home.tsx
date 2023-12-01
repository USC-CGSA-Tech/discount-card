import siteMetadata from '@/components/siteMetadata.js'
import Link from 'next/link'

export default function Header_home() {
    const startSearch = () => {
        const searchBtn = document.getElementById("searchBtn")
        const closeBtn = document.getElementById("closeBtn")
        const searchInput = document.getElementById("searchInput")
        if (searchBtn != null) {
            searchBtn.style.left = '0'
            searchBtn.style.right = 'auto'
            searchBtn.style.width = '2rem'
        }
        if (closeBtn != null) {
            closeBtn.style.display = 'block'
        }
        if (searchInput != null) {
            searchInput.style.display = 'block'
        }
    }

    const closeSearch = () => {
        const searchBtn = document.getElementById("searchBtn")
        const closeBtn = document.getElementById("closeBtn")
        const searchInput = document.getElementById("searchInput")
        if (searchBtn != null) {
            searchBtn.style.left = 'auto'
            searchBtn.style.right = '0'
            searchBtn.style.width = 'auto'
        }
        if (closeBtn != null) {
            closeBtn.style.display = 'none'
        }
        if (searchInput != null) {
            searchInput.style.display = 'none'
        }
    }

    return (
        <header>
            <div className='flex m-5'>
                <img src="/logo.svg" alt="logo" className="mr-5"/>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 right-0 flex items-center pl-3" id="searchBtn">
                        <img src="/search.svg" alt="search" onClick={startSearch}/>
                    </div>
                    <input className="w-full p-4 pl-10 rounded-lg bg-gray-100 hidden" placeholder="Search" id="searchInput"/>
                    <img src="/close.svg" alt="close" className="absolute right-2.5 bottom-2.5 hidden" onClick={closeSearch} id="closeBtn"/>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-5xl font-medium ">
                    USC CGSA
                </h1>
                <h1 className="text-5xl font-medium">
                    折扣卡商家
                </h1>
                <p className="text-lg my-5">
                    {siteMetadata.description}
                </p>
            </div>
            <div className='grid grid-cols-3'>
                <Link href="/food" className='bg-defaultcolor h-10 text-center text-3xl text-white rounded-lg mx-3'>美食</Link>
                <Link href="/entertainment" className='bg-defaultcolor h-10 text-center text-3xl text-white rounded-lg mx-3'>娱乐</Link>
                <Link href="/living" className='bg-defaultcolor h-10 text-center text-3xl text-white rounded-lg mx-3'>生活</Link>
            </div>
        </header>
    )
}