import siteMetadata from '@/components/siteMetadata.js'
import { Webpage, Mail, WeChat, Instagram, Redbook } from '@/components/icons'

export default function Footer() {
  return (
    <footer className='mx-5'>
      <div className='mt-5'>
        <h1 className='text-defaultcolor text-3xl font-semibold'>USC CGSA</h1>
        <div className='text-defaultcolor'>{siteMetadata.introduction}</div>
        <br />
        <h1 className='text-defaultcolor text-xl font-medium mb-2'>企业咨询</h1>
        <div className='grid grid-cols-2 text-defaultcolor text-sm'>
            <div className=''>{siteMetadata.minister}</div>
            <div>Email:{siteMetadata.minister_email}</div>
            <div></div>
            <div>WeChat:{siteMetadata.minister_wechat}</div>
            <div className=''>{siteMetadata.viceminister}</div>
            <div>Email:{siteMetadata.viceminister_email}</div>
            <div></div>
            <div>WeChat:{siteMetadata.viceminister_wechat}</div>
            <div className="mt-2 flex flex-col">
                <div className="mb-3">
                    < Webpage className="fill-current float-left h-6 w-6"/>
                    <div className='text-defaultcolor mb-1'>{siteMetadata.webpage}</div>
                    < Mail className="fill-current float-left mr-3 h-6 w-6"/>
                    <div className='text-defaultcolor mb-1'>{siteMetadata.email}</div>
                    < WeChat className="fill-current float-left mr-3 h-6 w-6"/>
                    <div className='text-defaultcolor mb-1'>{siteMetadata.wechat}</div>
                    < Instagram className="fill-current float-left mr-3 h-6 w-6"/>
                    <div className='text-defaultcolor mb-1'>{siteMetadata.instagram}</div>
                    < Redbook className="fill-current float-left mr-3 h-6 w-6"/>
                    <div className='text-defaultcolor mb-1'>{siteMetadata.redbook}</div>
                </div>
            </div>
            <img
                alt="qrcode"
                src="/images/qrcode.png"
                className='my-auto ml-5'
                width={100}
                height={100}
            />
        </div>
      </div>
      
    </footer>
  )
}
