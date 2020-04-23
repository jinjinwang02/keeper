import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputForm from "./InputForm"

function App() {

const [posts, setPosts] = useState([]);

function addPosts(input) {
  if(input.title.length>0 && input.content.length>0){
   setPosts(prevPosts => {
    return [...prevPosts, input]
   })
 } else if (input.title.length===0 && input.content.length>0){
     alert("Please give your note a title.")
 } else if (input.title.length>0 && input.content.length ===0){
     alert("Please include some contents.")
 } else {
     alert("Please give your note a title and some contents.")
 }
}


function deletePosts(id) {
  setPosts(prevPosts => {
    return prevPosts.filter((post, index) => {
      return index !==id;
    });
  });
};

return (
   <div>
   <Header />
   <InputForm onAdd={addPosts}/>
   <div className="container_note">
    {posts.map((post, index) => (
      <Note
        key={index}
        id={index}
        title={post.title}
        content={post.content}
        onChecked={deletePosts}
        />
        ))}
    </div>
    <Footer />
   </div>
)
}

export default App;
