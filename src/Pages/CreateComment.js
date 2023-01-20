import { useState } from "react";
import './CreateBlogPost.css';


export function CreateComment(props) {

    const [name, setName] = useState("");
    const [contents, setContents] = useState("");
    
    const [error, setError] = useState();


    const clear = () => {
        setName("");
        setContents("");
    }

    const applyResult = (result) => {
        if (result.ok) {
            clear();
        }
    };



    const createComment = () => {
        fetch(
            '/comments/' + props.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    summary,
                    contents,
                
                })
        }).then(result => {
            if (!result.ok) {
                setError('Antraštė privalo būti unikali!' );
            } else {
                setError();
            }
        }).then(applyResult);
    };

    return(<div className="Create">
                    

        <h2>Naujas įrašas</h2>
        <form>
        <label> {error && (<div className='error'>{error}</div>)}  
          Antraštė: <input type="text" className={error} value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label >Santrauka:<input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
        </label>
        <label >Tekstas:  <textarea value={contents} onChange={(e) => setContents(e.target.value)}>
</textarea>
        </label>
        <input type="submit" value="Submit"  onClick={createBlogPost}/>
      </form>

    </div>)
}
