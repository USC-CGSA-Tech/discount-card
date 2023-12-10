import {
  ModalForm,
  ProForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
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
  const fileURL = fileResponse?.data;
  return fileURL;
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

  const { token } = useModel('@@initialState').initialState;
  const uploadImageURL = 'http://localhost:8081/staff/upload';

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
            setPreviewImage(
              file.url || getUploadImageURL(file) || file.thumbUrl,
            );
            setPreviewVisible(true);
          },
          headers: {
            token: token,
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
      <ProFormText name="name" label="名称" rules={[{ required: true }]} />
      <ProForm.Item name="type" rules={[{ required: true }]}>
        <ProFormSelect
          name="type"
          label="类型"
          options={[
            {
              value: '生活',
              label: '生活',
            },
            {
              value: '美食',
              label: '美食',
            },
            {
              value: '娱乐',
              label: '娱乐',
            },
          ]}
        />
      </ProForm.Item>
      <ProForm.Item name="tag" label="标签">
        <ProFormSelect
          options={[
            { value: '车', label: '车' },
            { value: '转运', label: '转运' },
          ]}
          fieldProps={{
            mode: 'multiple',
          }}
          rules={[
            {
              required: true,
              message: '选择标签',
              type: 'array',
            },
          ]}
        />
      </ProForm.Item>
      <ProForm.Item
        name="phone"
        label="电话"
        rules={[{ validator, required: true }]}
      >
        <PhoneInput />
      </ProForm.Item>
      <ProFormText name="wechat" label="微信" />
      <ProFormText name="email" label="邮箱" rules={[{ type: 'email' }]} />
      <ProFormText name="address" label="地址" />
      <ProFormText
        name="description"
        label="简介"
        rules={[{ required: true }]}
      />
      <ProFormTextArea
        name="promotion"
        label="优惠"
        rules={[{ required: true }]}
      />
      <ProFormDatePicker name="releaseTime" label="上线时间" />
    </ModalForm>
  );
};
