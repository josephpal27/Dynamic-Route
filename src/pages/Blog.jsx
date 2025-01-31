import { Link } from "react-router-dom"
import Header from "../common/Header"
import { blogData } from "../data/BlogData"


function Blog() {
    return (
        <div>
            <Header />

            <div className="container blog-cards">
                {blogData.map((blog, index) => {
                    return (
                        <div className="card" key={index}>
                            <h3>{blog.title}</h3>
                            <Link to={`/blog/${blog.id}`}><button>READ MORE</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog
