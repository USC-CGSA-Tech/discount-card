/* eslint-disable */
import { request } from '@umijs/max';

const BaseUrl = 'http://localhost:8081/staff';

interface resType {
  code: number;
  data: {
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
  }[];
  message: string;
}

export async function queryBusinessList(
  token: string,
  params: {
    // query
    /** index */
    index?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<resType>(`${BaseUrl}/business`, {
    method: 'GET',
    params: {
      ...params,
    },
    headers: {
      token: token,
    },
    ...(options || {}),
  });
}

export async function addBusiness(
  token: string,
  body?: API.BusinessInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_BusinessInfo_>(`${BaseUrl}/business`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    data: body,
    ...(options || {}),
  });
}

export async function updateBusiness(
  token: string,
  body?: API.BusinessInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_BusinessInfo_>(`${BaseUrl}/business`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteBusiness(
  token: string,
  params: {
    id?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.Result_string_>(`${BaseUrl}/business`, {
    method: 'DELETE',
    headers: {
      token: token,
    },
    params: { ...params },
    ...(options || {}),
  });
}
