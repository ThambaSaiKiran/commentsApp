import {Component} from 'react'

import './index.css'
import {v4 as uuidV4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const obj = {
      id: uuidV4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, obj],
      name: '',
      comment: '',
    }))
  }

  onClickLike = likeId => {
    const {commentList} = this.state
    const newLikeList = commentList.map(item => {
      if (item.id === likeId) {
        const {id, name, comment, isLiked} = item
        const newObj = {id, name, comment, isLiked: !isLiked}
        return newObj
      }
      return item
    })
    this.setState({commentList: newLikeList})
  }

  onDeleteClick = delId => {
    const {commentList} = this.state
    const newDelList = commentList.filter(item => item.id !== delId)
    this.setState({commentList: newDelList})
  }

  render() {
    const {commentList, comment, name} = this.state
    return (
      <div className="bg1">
        <div className="bg2">
          <div className="bg3">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                rows="5"
                cols="30"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="img"
          />
        </div>
        <div>
          <div>
            <p>{commentList.length}</p>
            <p>Comments</p>
          </div>
          <ul>
            {commentList.map(item => (
              <CommentItem
                key={item.id}
                commentIt={item}
                likeFunc={this.onClickLike}
                deleteFunc={this.onDeleteClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
