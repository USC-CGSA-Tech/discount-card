import services from '@/services/business';
import {
  ActionType,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Access, useAccess, useModel } from '@umijs/max';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';
import EditForm, {
  convertToPhone,
  extractPhone,
} from '../Manage/components/EditForm';

const { addBusiness, queryBusinessList, updateBusiness, deleteBusiness } =
  services.BusinessController;

const handleAdd = async (token: string, fields) => {
  const hide = message.loading('正在添加');
  try {
    await addBusiness(token, { ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！ error: ' + error.message || '');
    return false;
  }
};

const handleUpdate = async (token: string, fields) => {
  const hide = message.loading('正在配置');
  try {
    await updateBusiness(token, { ...fields });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！ error: ' + error.message || '');
    return false;
  }
};

const handleDelete = async (token: string, row_id: string) => {
  const hide = message.loading('正在删除');
  try {
    await deleteBusiness(token, {
      id: row_id,
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试！ error: ' + error.message || '');
    return false;
  }
};

const ManagePage: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [formInitialValues, setFormInitialValues] = useState<any>({});
  const actionRef = useRef<ActionType>();
  const access = useAccess();
  const { token } = useModel('@@initialState').initialState;
  const columns = [
    {
      title: '商家名称',
      dataIndex: 'name',
      valueType: 'text',
    },
    {
      title: '电话',
      dataIndex: 'telephone',
      valueType: 'text',
    },
    {
      title: '微信',
      dataIndex: 'wechat',
      valueType: 'text',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      valueType: 'text',
      formItemProps: { rules: [{ type: 'email' }] },
    },
    {
      title: '地址',
      dataIndex: 'address',
      valueType: 'text',
    },
    {
      title: '简介',
      dataIndex: 'description',
      valueType: 'text',
    },
    {
      title: '优惠',
      dataIndex: 'promotion',
      valueType: 'text',
    },
    {
      title: '上线时间',
      dataIndex: 'releaseTime',
      valueType: 'dateTime',
    },
    {
      title: '图片',
      dataIndex: 'imageUrl',
      valueType: 'image',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 150,
      render: (text, record, _, action) => [
        <Access accessible={access.canWrite()} fallback={<div>没有权限</div>}>
          <a
            key="editable"
            onClick={() => {
              setIsUpdate(true);
              record.phone = convertToPhone(record.telephone);
              if (record.imageUrl !== '') {
                record.image = [
                  {
                    uid: '-1', // Unique identifier for the file
                    name: 'image', // File name
                    status: 'done', // Status should be 'done' to show as uploaded
                    url: record.imageUrl, // URL of the uploaded file
                  },
                ];
              }
              setFormInitialValues(record);
              handleModalVisible(true);
            }}
          >
            编辑
          </a>
          <a
            key="delete"
            onClick={() => {
              handleDelete(token, record.id);
              actionRef.current?.reload();
            }}
          >
            删除
          </a>
        </Access>,
      ],
    },
  ];
  return (
    <PageContainer ghost>
      <ProTable
        rowKey="id"
        columns={columns}
        search={false}
        actionRef={actionRef}
        toolBarRender={() => [
          <Access
            accessible={access.canWrite()}
            fallback={
              <Button type="primary" disabled>
                新建{' '}
              </Button>
            }
          >
            <Button
              key="add"
              type="primary"
              onClick={() => {
                setFormInitialValues({});
                setIsUpdate(false);
                handleModalVisible(true);
              }}
            >
              新建
            </Button>
            ,
          </Access>,
        ]}
        request={async (params, sorter, filter) => {
          const res = await queryBusinessList(token, {
            ...params,
          });
          if (res.code !== 200) {
            message.error(res.message);
          }
          const ret = {
            data: res.data || [],
            success: res.code === 200,
          };
          return ret;
        }}
      />
      <EditForm
        title={isUpdate ? '编辑' : '新建'}
        visible={createModalVisible}
        setVisible={handleModalVisible}
        initialValues={formInitialValues}
        handleSubmit={async (value) => {
          let handler = isUpdate ? handleUpdate : handleAdd;

          value.telephone = extractPhone(value.phone);
          value.imageUrl = '';

          if (value.image?.length === 1) {
            const imageResponse = value.image[0].response;
            const oldImageurl = value.image[0].url;
            const fileURL = imageResponse?.data;
            value.imageUrl = fileURL || oldImageurl || '';
          }

          if (isUpdate) {
            value.id = formInitialValues.id;
          }
          const success = await handler(token, value);
          if (!success) return false;

          handleModalVisible(false);
          actionRef.current?.reload();
          return true;
        }}
      />
    </PageContainer>
  );
};

export default ManagePage;
