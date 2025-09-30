export const bilderUrl = (params) => {
  let urlWithParams = "https://api.escuelajs.co/api/v1/products/?title=";
  //   Object.entries(params).forEach(([key, value], i) => {
  //     const sing = !i ? "?" : "&";
  //     urlWithParams += `${sing}${key}= ${value}`;
  //   });
  urlWithParams += params;
  console.log("из helper", urlWithParams);
  return urlWithParams;
};
// `${BASE_URL}/products/${idProd}`

export const sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
