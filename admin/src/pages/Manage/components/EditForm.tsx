import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import PhoneInput from 'antd-phone-input';
import { useState } from 'react';

interface UpdateFormProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title: string;
  initialValues: any;
  handleSubmit: (values: any) => Promise<boolean>;
}

interface Phone {
  countryCode: number;
  areaCode: number;
  phoneNumber: string;
  isoCode: string;
}

export function extractPhone(phone: Phone) {
  return `${phone.areaCode}${phone.phoneNumber}`;
}

export function convertToPhone(phone: string) {
  // take first 3 digits as area code
  // take the rest as phone number
  const areaCode = phone.slice(0, 3);
  const phoneNumber = phone.slice(3);
  return {
    countryCode: 1,
    areaCode: parseInt(areaCode),
    phoneNumber,
    isoCode: 'us',
  };
}

export function getUploadImageURL(file) {
  const fileResponse = file.response;
  const filename = fileResponse?.filename;
  return `http://localhost:20002/images/${filename}`;
}

export default (props: UpdateFormProps) => {
  const { visible, setVisible, title, initialValues, handleSubmit } = props;
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const validator = (_, value) => {
    const valid = value.valid;
    if (value.countryCode !== 1) return Promise.reject('只支持美国电话号码');
    if (!valid()) return Promise.reject('不是一个有效的号码');
    return Promise.resolve();
  };
  const uploadImageURL = 'http://localhost:20002/upload-image/';

  return (
    <ModalForm
      title={title}
      open={visible}
      modalProps={{
        onCancel: () => setVisible(false),
        destroyOnClose: true,
      }}
      onFinish={handleSubmit}
      initialValues={initialValues}
    >
      <ProFormUploadButton
        name="image"
        label="图片"
        action={uploadImageURL}
        max={1}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
          onPreview: async (file) => {
            console.log(file);
            setPreviewImage(
              file.url || getUploadImageURL(file) || file.thumbUrl,
            );
            setPreviewVisible(true);
          },
        }}
      />
      <Modal
        open={previewVisible}
        title="预览"
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
      <ProFormText name="name" label="名称" />
      <ProForm.Item name="phone" label="电话" rules={[{ validator }]}>
        <PhoneInput />
      </ProForm.Item>
      <ProFormText name="wechat" label="微信" />
      <ProFormText name="email" label="邮箱" rules={[{ type: 'email' }]} />
      <ProFormText name="address" label="地址" />
      <ProFormText name="description" label="简介" />
      <ProFormText name="promotion" label="优惠" />
    </ModalForm>
  );
};
