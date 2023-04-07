import React from "react";
import s from './Paginator.module.css';

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

    return (
        <div>
            {pages.map(p => {
                return (
                    <span onClick={() => onPageChanged(p)}
                          className={currentPage === p ? s.selected : ''}>{p}</span>
                )
            })}
        </div>
    );
}

