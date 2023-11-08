import Header from '@/components/Header_main'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'


const shopArr = [
    {   
        id: 1,
        name: "商家店名（超链接）",
        address: "",
        discount: ""
    },
    {
        id: 2,
        name: "商家店名（超链接）",
        address: "",
        discount: ""
    }
]

export default function entertainment() {
    const router = useRouter()
    return (
        <div>
            <Header lefttag='美食' centertag='娱乐' righttag='生活'/>
            <ul className='mb-20'>
                {
                    shopArr.map(shop => {
                        return (
                            <li key={shop.id} className='m-5'>
                                <div className="grid grid-flow-row grid-cols-5">
                                    <div className="row-span-6 col-span-2">
                                        <img src="" alt="商家logo" className='bg-gray-100 m-2 float-right' width={100} height={100}/>
                                    </div>
                                    <Link href={{pathname: "/shop", query: {id: shop.id, category: router.pathname.substring(1)}}} className="col-span-3 break-words pl-2"><div>{shop.name}</div></Link>
                                    <div className='col-span-3'><br /></div>
                                    <div className="col-span-1 pl-2">地址：</div>
                                    <div className='col-span-2 break-words'>{shop.address}</div>
                                    <div className='col-span-3'><br /></div>
                                    <div className="col-span-1 pl-2">折扣：</div>
                                    <div className='col-span-2 break-words'>{shop.discount}</div>
                                    <div className='col-span-3'><br /></div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Footer />
        </div>
    )
}