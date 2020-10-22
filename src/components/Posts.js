import React, { Component } from 'react'

class Posts extends Component {
  // The state and the fetch call to the fake API that used to be here were moved to the action creator function in postActions.js
  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;