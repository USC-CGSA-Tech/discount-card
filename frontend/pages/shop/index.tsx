import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'

export default function shop() {
    const router = useRouter()
    return (
        <div>
            <Header path={'/'+router.query.category}/>
            <div>
                <h1 className='w-full text-center text-3xl'>店名</h1>
                <img src="" alt="商家logo" className='bg-gray-200 m-auto my-3' width={100} height={100}/>
                <div className='w-full text-center'>店家详情介绍 </div>
                <div className='grid grid-cols-5 m-5 text-xl'>
                    <div className='text-right pr-2'>地址:</div>
                    <div className='col-span-4 break-words'></div>
                    <div className='col-span-5'><br /></div>
                    <div className='text-right pr-2'>折扣:</div>
                    <div className='col-span-4 break-words'></div>
                    <div className='col-span-5'><br /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
} 