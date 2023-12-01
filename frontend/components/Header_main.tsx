import Link from "next/link"

type HeaderProps = {
    lefttag: string,
    centertag: string,
    righttag: string
}

const Header_main = ({ lefttag, centertag, righttag }: HeaderProps) => {
    const startSearch = () => {
        const mainHeader = document.getElementById("mainHeader")
        const searchBtn = document.getElementById("searchBtn")
        const closeBtn = document.getElementById("closeBtn")
        const searchInput = document.getElementById("searchInput")
        const searchBox = document.getElementById("searchBox")
        const homeBtn = document.getElementById("homeBtn")
        const logo = document.getElementById("logo")
        if (mainHeader != null) {
            mainHeader.style.justifyContent = 'normal'
        }
        if (searchBox != null) {
            searchBox.style.width = '100%'
        }
        if (searchBtn != null) {
            searchBtn.style.left = '0'
            searchBtn.style.right = 'auto'
            searchBtn.style.width = '2rem'
            searchBtn.style.paddingLeft = '0.75rem'
        }
        if (closeBtn != null) {
            closeBtn.style.display = 'block'
        }
        if (searchInput != null) {
            searchInput.style.display = 'block'
        }
        if (homeBtn != null) {
            homeBtn.style.display = 'none'
        }
        if (logo != null) {
            logo.style.marginRight = '1.25rem'
        }
    }

    const closeSearch = () => {
        const mainHeader = document.getElementById("mainHeader")
        const searchBtn = document.getElementById("searchBtn")
        const closeBtn = document.getElementById("closeBtn")
        const searchInput = document.getElementById("searchInput")
        const searchBox = document.getElementById("searchBox")
        const homeBtn = document.getElementById("homeBtn")
        const logo = document.getElementById("logo")
        if (mainHeader != null) {
            mainHeader.style.justifyContent = 'space-between'
        }
        if (searchBox != null) {
            searchBox.style.width = '2rem'
        }
        if (searchBtn != null) {
            searchBtn.style.left = 'auto'
            searchBtn.style.right = '0'
            searchBtn.style.width = 'auto'
            searchBtn.style.paddingLeft = '0rem'
        }
        if (closeBtn != null) {
            closeBtn.style.display = 'none'
        }
        if (searchInput != null) {
            searchInput.style.display = 'none'
        }
        if (homeBtn != null) {
            homeBtn.style.display = 'block'
        }
        if (logo != null) {
            logo.style.marginRight = '0'
        }
    }

    return (
        <header>
            <div className="flex justify-between p-5" id="mainHeader">
                <Link href="/home" className="" id="homeBtn"><img src="/home.svg" alt="home"/></Link>
                <img src="/logo.svg" alt="logo" id="logo"/>
                <div className="relative w-8" id="searchBox">
                    <div className="absolute inset-y-0 right-0 flex items-center" id="searchBtn">
                        <img src="/search.svg" alt="search" onClick={startSearch}/>
                    </div>
                    <input className="w-full p-4 pl-10 rounded-lg bg-gray-100 hidden" placeholder="Search" id="searchInput"/>
                    <img src="/close.svg" alt="close" className="absolute right-2.5 bottom-2.5 hidden" onClick={closeSearch} id="closeBtn"/>
                </div>
            </div>
            <div className="bg-defaultcolor h-20">
                <div className="grid grid-cols-3">
                    <div className="h-10 mt-10 bg-white rounded-t-full text-center text-xl relative"><span className="absolute -translate-x-2/4 bottom-1">{lefttag}</span></div>
                    <div className="h-14 mt-6 bg-white rounded-t-3xl text-center text-2xl font-medium relative"><span className="absolute -translate-x-2/4 bottom-1">{centertag}</span></div>
                    <div className="h-10 mt-10 bg-white rounded-t-full text-center text-xl relative"><span className="absolute -translate-x-2/4 bottom-1">{righttag}</span></div>
                </div>
            </div>
        </header>
    )
}

export default Header_main