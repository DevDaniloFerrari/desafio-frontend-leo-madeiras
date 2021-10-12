import { Delete, Edit } from '@material-ui/icons';
import styled from 'styled-components'

export const DeleteIcon = styled(Delete)
`
    color: red;
    cursor: pointer;
`

export const EditIcon = styled(Edit)
`
    color: gray;
    cursor: pointer;
`

export const EmptyState = styled.div `
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
`