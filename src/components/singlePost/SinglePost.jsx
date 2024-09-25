import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="singlePostImg" className="singlePostImg"/>
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Igor</b></span>
          <span className="singlePostDate">1 hour ego</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A reiciendis similique vel? Error laboriosam minima
          optio repellendus suscipit tenetur veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam blanditiis dolore ea libero odit optio quas reiciendis repellendus temporibus veritatis? Alias animi
          debitis eos facere hic ipsum labore qui ullam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A reiciendis similique vel? Error laboriosam minima
          optio repellendus suscipit tenetur veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam blanditiis dolore ea libero odit optio quas reiciendis repellendus temporibus veritatis? Alias animi
          debitis eos facere hic ipsum labore qui ullam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A reiciendis similique vel? Error laboriosam minima
          optio repellendus suscipit tenetur veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam blanditiis dolore ea libero odit optio quas reiciendis repellendus temporibus veritatis? Alias animi
          debitis eos facere hic ipsum labore qui ullam!
        </p>
      </div>
    </div>
  );
}