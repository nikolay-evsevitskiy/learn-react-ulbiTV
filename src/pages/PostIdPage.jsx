import React from 'react';
import {useParams} from "react-router";

const PostIdPage = () => {
    const params = useParams()
    return (
        <h1>
            You opened post page! ID = {params.id}
        </h1>
    );
};

export default PostIdPage;
