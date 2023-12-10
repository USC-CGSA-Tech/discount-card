export default async () => {
  const res = await fetch('http://localhost:8081/staff/business');
  const jsonData = await res.json();
  return jsonData;
};