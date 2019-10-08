const mockRequest = request =>
  new Promise(resolve => setTimeout(() => resolve(request()), 1000));

export const get = key => mockRequest(() => JSON.parse(localStorage.getItem(key)) || []);
export const put = (key, items) => mockRequest(() => {
  localStorage.setItem(key, JSON.stringify(items));
  return items;
});
