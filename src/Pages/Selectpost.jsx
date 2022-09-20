import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Post = ({id, title, post}) => {
  return (
          <li className='liContainer'>
              <Link className="postTitle" to={`/post/${id}`} state={post}>
                  {title}.
              </Link>
          </li> 
  )
}

const Selectpost = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
  }, []);

  return (
      <main>
          <h2>Populära Trådar:</h2>
          <ul className='removeListStyleTypeClassLol'>
              {posts && posts.map((post, index) => 
                  <Post key={index} id={post.id} title={post.title} post={post}/>
              )}
          </ul>
      </main>
  )
}

export default Selectpost