import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [host, setHost] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, host };

        setIsPending(true);
        
        fetch('http://127.0.0.1:8000/api/blogs', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
                <h2>Add a new blog</h2>
                <form onSubmit={handleSubmit}>
                    <label> Blog title: </label>
                        <input 
                            type="text" 
                            required
                            value = { title }
                            onChange = {(e) => setTitle(e.target.value)}
                            
                        />
                    
                    <label> Blog body: </label>
                        <textarea
                            required
                            value = { body }
                            onChange = {(e) => setBody(e.target.value)}
                        ></textarea>

                    <label> Blog author: </label>
                        <select
                            value = { author }
                            onChange = {(e) => setAuthor(e.target.value) }
                        >
                            <option value="mario">mario</option>
                            <option value="yoshi">yoshi</option>

                        </select>
                    
                    <label> Host: </label>
                        <textarea
                            required
                            value = { host }
                            onChange = {(e) => setHost(e.target.value)}
                        ></textarea>

                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding Blog....</button>}
                    
                </form>

        </div>
     );
}
 
export default Create;