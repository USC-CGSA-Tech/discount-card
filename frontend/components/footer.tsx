import React from 'react';
import QRCode from '@/assets/qrcode.png';

function Footer() {
  return (
    <div className="text-theme px-5 pt-5">
      <div className="text-3xl font-bold">USC CGSA</div>
      <div>
        南加州大学中国学生研究会（USC-CGSA），是专门由南加州大学研究生，博士生和MBA组成的学生团体，专注为这一群体的留学生打造一个求职，就业，创业，学术分享和经验交流的平台。
      </div>
      <div className="font-semibold py-3">企业咨询</div>
      <div className="pb-3">
        <div className="flex flex-row justify-between">
          <div>外联部部长：张炎培</div>
          <div>
            <div>Email: yanpeiz@usc.edu</div>
            <div>Wechat: zyp990827</div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>外联部副部长：刘冰清</div>
          <div>
            <div>Email: liubingq@usc.edu</div>
            <div>Wechat: Lbqhtcute</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <div>Official Website: </div>
            <div>www.usccgsa.com</div>
          </div>
          <div>
            <div>Email: </div>
            <div>cgsa@usc.edu</div>
          </div>
          <div>
            <div>Wechat: </div>
            <div>USC CGSA</div>
          </div>
          <div>
            <div>Instagram: </div>
            <div>USCCGSA</div>
          </div>
          <div>
            <div>Xiaohongshu: </div>
            <div>USC CGSA</div>
          </div>
        </div>
        <div className="flex flex-col-reverse max-w-[50%]">
          <img src={QRCode.src} alt="QR Code" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
