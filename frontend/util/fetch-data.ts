import { backendURL } from '@/util/consts';

interface BackendData {
  address?: string;
  createAt: string;
  description: string;
  email?: string;
  id: number;
  imageUrl?: string;
  isDeleted: number;
  name: string;
  promotion: string;
  releaseTime: string;
  tag: string;
  telephone: string;
  type: string;
  updatedAt: string;
  wechat?: string;
}

export const fetchList = async () => {
  const res = await fetch(`${backendURL}/staff/business`);
  const jsonData = await res.json();
  const mappeddData = jsonData.data.map((item: BackendData) => {
    if (item.tag) {
      return {
        ...item,
        tag: item.tag.split(', '),
      };
    }
    return item;
  });
  return mappeddData;
};

export const fetchCardById = async (id: number) => {
  const res = await fetch(`${backendURL}/staff/business/${id}`);
  const jsonData = await res.json();
  return jsonData.data;
}