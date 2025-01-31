import { Link, useLocation } from "react-router-dom"
import Header from "../common/Header"
import { blogData } from "../data/BlogData";


function BlogDetails() {

    let uselocation = useLocation();
    // console.log(uselocation);
    let blogId = uselocation.pathname.split("/")[2];
    // console.log(blogId);
    let blog = blogData.filter((item) => item.id == blogId)[0];
    // console.log(blog);

    if (!blog) {
        return (
            <div id="notFound">
                <h2>BLOG NOT FOUND</h2>
                <Link to='/blog'><button className="btn">Go to Blogs Page</button></Link>
            </div>
        )
    }

  return (
    <div>
      <Header/>

      <div className="container blog-details">
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
      </div>
    </div>
  )
}

export default BlogDetails
