import React, {Component} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Image from '../img.png'
class Home extends Component{
    // state = {
    //     posts:[ ]
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
    //         console.log("results are ",res)
    //         this.setState({
    //             posts : res.data
    //         })
    //     } )
    // }
    render(){
        const postsList = this.props.posts.length  ? (
            this.props.posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                    <div className="card-content yellow">
                    <img src={Image} alt='collour combination'></img>

                        <Link to={'/'+ post.id}>
                             <span className="card-title"> {post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                  </div>
                )
            })
        ) :(
                <div>
                    posts are not found
                </div>
            
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                <div>{postsList}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home)