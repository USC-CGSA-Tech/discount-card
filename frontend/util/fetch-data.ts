export default async () => {
  const res = await fetch('http://localhost:8081/staff/business');
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