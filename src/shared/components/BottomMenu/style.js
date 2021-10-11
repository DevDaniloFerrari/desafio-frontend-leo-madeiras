import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    border: 1px solid #E6EBEF;
    justify-content: space-around;
    background: #fafafa;
    bottom: 0;
    position: sticky;
`

export const Item = styled.div `
    display: flex;
    flex-direction: column;
    height: 50px;
    cursor: pointer;
    text-decoration: none;
    justify-content: center;
    align-items: center;
`;

export const MenuTitle = styled.div `
    font-weight: ${({ selected }) => selected ? 600 : 400};
`
export const BottomMenuIcon = styled.img.attrs({ draggable: false })
`
    height: 25px;
    width: 24px;
`;