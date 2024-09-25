import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImage"
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="postImg"/>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dolorum minima
        minus nostrum ratione repudiandae sunt suscipit? Ipsam, voluptas.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dolorum minima
        minus nostrum ratione repudiandae sunt suscipit? Ipsam, voluptas.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dolorum minima
        minus nostrum ratione repudiandae sunt suscipit? Ipsam, voluptas.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dolorum minima
        minus nostrum ratione repudiandae sunt suscipit? Ipsam, voluptas.
      </p>
    </div>
  );
}