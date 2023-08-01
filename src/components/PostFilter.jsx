import {MyInput} from "./UI/input/MyInput";
import {MySelect} from "./UI/select/MySelect";
import React from "react";

export const PostFilter = ({filter, setFilter}) => {

    return (
        <>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.currentTarget.value})}
                placeholder={'search...'}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'sort'}
                options={[
                    {
                        name: 'by name',
                        value: 'title',
                    },
                    {
                        name: 'by description',
                        value: 'body',
                    },

                ]}
            />
        </>
    );
};
