import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Postpage = () => {

  const [comment, setComment] = useState(null);
  const [post, setPost] = useState(null);
  const {id} = useParams()

  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(resp => setPost(resp.data))
}, [id]);

/////////////////////////////////////

    useEffect( () => {
      
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(resp => setComment(resp.data))
    }, [id]);
   

  return (
    <>
      
      {post && <section className="postWrapper">
      <h3 className="pageTitle">Ämne:<br/>{post.title}</h3>
      
      <h3 className="postBody">Frågeställning: <br/>{post.body}</h3>
      </section>
        
        }
        
       <h3 className="commentTitle">Kommentarer</h3>
        <section className="commentWrapper">
            {comment && comment.map((comment, index) => (
          <div key={index} className="commentBox">
            <p className="commentBody">Kommentar:<br/> {comment?.body} </p>
            <p className="commentAuthor">Skriven av:<br/> {comment?.name} <br/> {comment?.email} </p>

          </div>
        ))
        
        }
          <Link className='navLink' to="/" >Tillbaka till Trådar</Link>
        </section>
    </>
  )
}

export default Postpage;