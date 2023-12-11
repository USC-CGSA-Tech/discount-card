import { backendURL } from '@/util/consts';

export default async () => {
  const res = await fetch(`${backendURL}/staff/business`);
  const jsonData = await res.json();
  const mappeddData = jsonData.data.map((item) => {
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