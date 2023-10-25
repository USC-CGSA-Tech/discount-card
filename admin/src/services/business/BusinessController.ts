/* eslint-disable */
import { request } from '@umijs/max';

const BaseUrl = 'http://localhost:8081/staff';

export async function queryBusinessList(
  params: {
    // query
    /** index */
    index?: number;
    /** pageSize */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  console.log('queryBusinessList', params);
  return request<API.Result_PageInfo_BusinessInfo__>(`${BaseUrl}/business`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function addBusiness(
  body?: API.BusinessInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_BusinessInfo_>(`${BaseUrl}/business`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updateBusiness(
  body?: API.BusinessInfoVO,
  options?: { [key: string]: any },
) {
  return request<API.Result_BusinessInfo_>(`${BaseUrl}/business`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function deleteBusiness(
  params: {
    id?: string;
  },
  options?: { [key: string]: any },
) {
  console.log('deleteBusiness', params);
  return request<API.Result_string_>(`${BaseUrl}/business`, {
    method: 'DELETE',
    params: { ...params },
    ...(options || {}),
  });
}
