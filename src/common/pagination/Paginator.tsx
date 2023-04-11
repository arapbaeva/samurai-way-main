import React from "react";
import s from './Paginator.module.css';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {Pagination} from "@mui/material";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
}
export const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount / 100; i++) {
        pages.push(i)
    }
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, pagesCount: number) => {
        onPageChanged(pagesCount);
    };
    return (
        // <div>
        //     {pages.map(p => {
        //         return (
        //             <span onClick={() => onPageChanged(p)}
        //                   className={currentPage === p ? s.selected : ''}>{p}</span>
        //         )
        //     })}
        // </div>
        <Stack spacing={2}>
            <Typography>Page: {currentPage}</Typography>
            <Pagination count={10} page={currentPage} onChange={handleChange} />
        </Stack>
    );
}


