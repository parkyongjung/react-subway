import { useEffect, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { getData } from '../../hooks/useAxios';
import { MenuList, ProductList, NewList } from '../../util/commonInterface';

const drift = keyframes`
from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`;
const MainBoxStyle = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
    background: #fbfcee;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    margin: 30px auto 0;
    &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            #ee88aa,
            rgba(221, 238, 255, 0) 80%,
            rgba(255, 255, 255, 0.5)
        );
        z-index: 11;
        transform: translate3d(0, 0, 0);
    }
`;
const WaveOne = styled.div`
    opacity: 0.4;
    position: absolute;
    top: 3%;
    left: 50%;
    background: #0af;
    width: 500px;
    height: 500px;
    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: ${drift} 3000ms infinite linear;
`;

const WaveTwo = styled.div`
    position: absolute;
    top: 3%;
    left: 50%;
    width: 500px;
    height: 500px;
    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: ${drift} 7000ms infinite linear;
    opacity: 0.1;
    background: yellow;
`;

const WaveThree = styled.div`
    opacity: 0.4;
    position: absolute;
    top: 3%;
    left: 50%;
    background: #0af;
    width: 500px;
    height: 500px;
    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: ${drift} 5000ms infinite linear;
`;
const MainTitle = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    line-height: 300px;
    text-align: center;
    transform: translate3d(0, 0, 0);
    color: white;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    letter-spacing: 0.4em;
    font-size: 24px;
    text-shadow: 0 1px 0 rgba(black, 0.1);
    text-indent: 0.3em;
`;

const Main = () => {
    // menuList state 정의
    const [menuList, setMenuList] = useState<MenuList[]>([]);

    // newsList state 정의
    const [newsList, setNewsList] = useState<NewList[]>([]);

    // productList state 정의
    const [productList, setProductList] = useState<ProductList[]>([]);
    const [datas, setDatas] = useState({});

    let fetchUrl = '/api/main/list';

    useEffect(() => {
        getAPI();

        function iDataType(
            data: any
        ): data is { menuList: any[]; productList: any[]; newsList: any[] } {
            return (
                data !== null && typeof data === 'object' && 'menuList' in data
            );
        }
        if (!(datas === undefined) || !(datas === null)) {
            const mainData = Object.values(datas)[0];
            if (iDataType(mainData)) {
                setMenuList(mainData.menuList);
                setNewsList(mainData.newsList);
                setProductList(mainData.productList);

                localStorage.setItem('menuList', JSON.stringify(menuList));
            }
        }
    }, []);

    const getAPI = useCallback(async () => {
        const response = await getData(fetchUrl);
        setDatas(response);
    }, [fetchUrl]);

    return (
        <>
            <MainBoxStyle>
                <WaveOne />
                <WaveTwo />
                <WaveThree />
                <MainTitle>Main</MainTitle>
            </MainBoxStyle>
            <div
                onClick={() => {
                    console.log(menuList);
                }}
            >
                test
            </div>
        </>
    );
};

export default Main;
