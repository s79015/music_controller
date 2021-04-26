import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
    const{ id } = useParams()
    const { data: blog, error, isPending} = useFetch('http://127.0.0.1:8000/api/blogs/' + id );
    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error } + { id }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            ) }

        </div>
    );
}
 
export default BlogDetails;