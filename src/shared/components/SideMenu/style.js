import styled from 'styled-components'
import logo from '../../../assets/logo-leo.svg'
import ArrowRightSrc from '../../../assets/arrow-right.png'

export const Menu = styled.div `
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 10px;
    background: #fafafa;
`

export const LogoLeo = styled.img.attrs({
    src: logo
})
`
    height: 80px;
    margin-top: 5px;
    margin-bottom: 20px;
`

export const Item = styled.div `
    border: 1px solid #E6EBEF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 27px;
    align-self: stretch;
    height: 70px;
    margin-bottom: 12px;
    cursor: pointer;
    overflow: hidden;
    background: white;
    text-decoration: none;
`;

export const SidebarIcon = styled.img.attrs({ draggable: false })
`
    height: 24px;
    width: 24px;
    margin-right: 16px;
`;

export const SidebarTitleAndSubtitle = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.div `
    font-weight: ${({ selected }) => selected ? 600 : 400};
    font-size: 14px;
    color: #1B1C1D;
`;

export const ArrowRightIcon = styled.img.attrs({
    draggable: false,
    src: ArrowRightSrc
})
`
    height: 16px;
    margin-left: 10px;
`;