import React from 'react'
import { useTable, usePagination } from 'react-table';
import styled from 'styled-components';
import { ChevronLeft, ChevronRightRounded } from '@material-ui/icons';

export default function Index({ columns, data, rowProps = () => ({}), lastAlignRight, cursorPointer }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        usePagination
    )

    return (
        <>
            <Table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <ColumnsHeaderRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <Th lastAlignRight={lastAlignRight} {...column.getHeaderProps()}>{column.render('Header')}</Th>
                            ))}
                        </ColumnsHeaderRow>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TRBody cursorPointer={cursorPointer} {...row.getRowProps(rowProps(row))}>
                                {row.cells.map(cell => {
                                    return <TD {...cell.getCellProps()} lastAlignRight={lastAlignRight}>{cell.render('Cell')}</TD>
                                })}
                            </TRBody>
                        )
                    })}
                </tbody>
            </Table>

            {pageOptions.length > 1 && <PaginationWrapper className="pagination">
                <PaginationText>
                    {'Página'}{' '}
                    <b>{pageIndex + 1}</b> {'de'} <b>{pageOptions.length}</b>
                </PaginationText>
                <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <ChevronLeft />
                </Button>
                <Button onClick={() => nextPage()} disabled={!canNextPage}>
                    <ChevronRightRounded />
                </Button>
            </PaginationWrapper>}
        </>
    )
}

const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    margin-top: 20px;
`;

const Button = styled.div`
    cursor: pointer;
    margin-left: 20px;
`;

const PaginationText = styled.div`
    margin-top: 2px;
`;

const Table = styled.div`
    border-collapse: collapse;
`

const ColumnsHeaderRow = styled.tr`
    height: 46px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
`


const Th = styled.th`
  vertical-align: middle;
  color: #1B1C1D;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  padding-right: 32px;
  text-align: left;
  &&:first-of-type {
    padding-left: 32px;
  }
  &&:last-of-type {
    ${({ lastAlignRight }) => lastAlignRight ? 'text-align: right;' : ''}
    padding-right: 15px;
  }
`
const TRBody = styled.tr`
  background-color: white;
  border: 1px solid #F2F2F2;
  ${({ cursorPointer }) => cursorPointer ? 'cursor: pointer;' : ''}
  > td:first-of-type {
    padding-left: 23px;
  }

  > td:last-of-type {
    width: 99%;
    ${({ lastAlignRight }) => lastAlignRight ? 'text-align: right;' : ''}
    padding-right: 15px;
  }
  
  &&:hover {
    background-color: #FAFAFA;
    border-left: solid 3px #429101;
    > td:first-of-type {
      padding-left: 22px;
    }
  }
`;

const TD = styled.td`
  height: 40px;
  vertical-align: middle;
  padding-right: 16px;
  color: ${({ color }) => color ? color : '#9898A9'};
  font-size: 16px;
  white-space: nowrap;
`;