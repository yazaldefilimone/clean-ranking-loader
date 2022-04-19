export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

export const serverError = (error: any) => ({
  statusCode: 500,
  data: error.stack,
});
export const ok = (data: any) => ({
  statusCode: 200,
  data,
});
