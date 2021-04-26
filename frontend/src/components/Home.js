import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const { data, isPending, error } = useFetch('http://127.0.0.1:8000/api/blogs');

    return (
        <div className="home">
            {error && <div> { error } </div> }
            {isPending && <div> Loading...</div> }
            {data && <BlogList blogs={ data } title="All blogs" />}
         
        </div>

     );
}
 
export default Home;