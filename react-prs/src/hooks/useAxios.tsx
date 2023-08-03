import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'; // 추가
// import { APIResponse } from '../util/commonResponse';

/** Axios Response 데이터 형식
 *  config : 요청에 대한 axios 구성 설정
 *  data 서버가 제공한 응답 데이터
 *  headers : 헤더 정보
 *  request : 요청
 *  status : 응답 HTTP 상태 코드
 *  statusText : 응답 HTTP 상태 메시지
 */

// 본인 서버에서 내려주는 응답 구조
interface APIResponse<T> {
    statusCode: number;
    errorCode: number;
    message: string;
    result: T;
    timestamp: Date;
}

// axios 인스턴스 생성
const client: Axios = axios.create({
    baseURL: 'http://localhost:3000',
});

//TODO: GET 메서드
export const getData = async <T,>(
    url: string,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await client.get<APIResponse<T>>(url, config);
        if (!(response.status === 200)) {
            console.log('false');
        }
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

//TODO: POST 메서드
export const postData = async <T,>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    try {
        const response = await client.post<AxiosResponse<T>>(url, data, config);
        if (!(response.status === 200)) {
            console.log('false');
        }
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// //TODO: PUT 메서드
// export const putData = async <T,>(
//     url: string,
//     data?: any,
//     config?: AxiosRequestConfig
// ): Promise<APIResponse<T>> => {
//     try {
//         const response = await client.put<APIResponse<T>>(url, data, config);
//         return response.data;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// //TODO: Delete 메서드
// export const deleteData = async <T,>(
//     url: string,
//     config?: AxiosRequestConfig
// ): Promise<APIResponse<T>> => {
//     try {
//         const response = await client.delete<APIResponse<T>>(url, config);
//         return response.data;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };
