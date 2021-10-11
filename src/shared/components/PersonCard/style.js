import styled from 'styled-components'

export const Container = styled.div `
    border: 1px solid #c9c9c9;
    box-shadow: 0px 2px 2px #c5c5c5;
    height: 200px;
    border-radius: 15px;
    margin-bottom: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`

export const Label = styled.div `
    font-weight: bold;
    font-size: 13px;
    margin-right: 10px;
`

export const Section = styled.div `
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const SectionItem = styled.div `
    display: flex;
    flex: 1;
`

export const ActionButtons = styled.div `
    align-self: center;
`