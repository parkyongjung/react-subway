import styled from 'styled-components';
import subWayLogo from '../../assets/images/logo_w.png';
import Icons from '../icons/icon';
import { useEffect, useState } from 'react';
import { MenuList } from '../../util/commonInterface';

const AppBar = () => {
    const [lists, setLists] = useState<MenuList[]>([]);

    useEffect(() => {
        const storedData = localStorage.getItem('menuList');
        if (storedData) {
            const parsedData: MenuList[] = JSON.parse(storedData);
            setLists(parsedData);
        }
    }, []);

    const filteredItems = lists.filter((item) =>
        ['100', '200', '300', '400', '500', '600'].includes(item.men_id)
    );

    // Extract only the men_name values from the filtered items
    const menNames = filteredItems.map((item) => item.men_name);

    const groupByRange = (min: number, max: number) => {
        return lists.filter((item) => {
            const menId = parseInt(item.men_id, 10);
            return menId >= min && menId <= max && menId % 100 !== 0;
        });
    };

    // Group the items into 6 groups based on men_id ranges
    const men100s = groupByRange(101, 199);
    const men200s = groupByRange(201, 299);
    const men300s = groupByRange(301, 399);
    const men400s = groupByRange(401, 499);
    const men500s = groupByRange(501, 599);
    const men600s = groupByRange(601, 699);

    return (
        <>
            <AppBarStyle>
                <AppbarImgBox>
                    <Icons src={subWayLogo} alt='' />
                </AppbarImgBox>

                {menNames.map((name, index) => (
                    <div key={index}>{name}</div>
                ))}

                <div>
                    <h2>100s</h2>
                    {men100s.map((item) => (
                        <div key={item.men_id}>{item.men_name}</div>
                    ))}
                </div>

                <div>
                    <h2>200s</h2>
                    {men200s.map((item) => (
                        <div key={item.men_id}>{item.men_name}</div>
                    ))}
                </div>
            </AppBarStyle>
        </>
    );
};

const AppBarStyle = styled.div`
    display: flex;
    position: relative;
    z-index: 1060;
    width: 100%;
    // background: white;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    box-shadow: 0 0 20rem rgba(0, 0, 0, 0.06);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    padding: 0 5%;
`;

const AppbarImgBox = styled.div`
    width: 141px;
`;

export default AppBar;
