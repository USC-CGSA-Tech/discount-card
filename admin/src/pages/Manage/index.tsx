import services from '@/services/demo';
import {
  ActionType,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';
import CreateForm from '../Table/components/CreateForm';

const { addUser, queryUserList, updateUser, deleteUser } =
  services.UserController;

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');
  try {
    await addUser({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

const handleUpdate = async (fields) => {
  const hide = message.loading('正在配置');
  try {
    await updateUser({ ...fields });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

const handleDelete = async (row_id: string) => {
  const hide = message.loading('正在删除');
  try {
    await deleteUser({
      id: row_id,
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const ManagePage: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const actionRef = useRef<ActionType>();
  const columns = [
    {
      title: '名称',
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
      title: '图片',
      dataIndex: 'imageUrl',
      valueType: 'text',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 150,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            console.log(text, record, _, action);
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            console.log(record);
            handleDelete(record.id);
            action?.reload?.();
          }}
        >
          删除
        </a>,
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
          <Button
            key="add"
            type="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            新建
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          const { data, code } = await queryUserList({
            ...params,
          });
          const ret = {
            data: data || [],
            success: code === 200,
          };
          return ret;
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            await handleUpdate(data);
          },
          onDelete: async (rowKey, data) => {
            console.log(rowKey, data);
            await handleDelete(rowKey);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      >
        <ProTable
          onSubmit={async (value) => {
            const success = await handleAdd(value);
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="id"
          type="form"
          columns={columns}
        />
      </CreateForm>
    </PageContainer>
  );
};

export default ManagePage;
