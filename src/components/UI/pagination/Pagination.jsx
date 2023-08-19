import React from 'react';
import style from "./Pagination.module.css";
import {MyButton} from "../button/MyButton";

const Pagination = (props) => {
    const changePage = (pageNumber) => {
        props.setPage(pageNumber)

    }
    return (
        <div className={style.pagination}>
            {props.pagesArray.map(p =>
                <MyButton
                    className={props.page === p ? style.currentPage : style.page}
                    key={p}
                    onClick={() => changePage(p)}
                >
                    {p}
                </MyButton>
            )}
        </div>
    );
};

export default Pagination;
