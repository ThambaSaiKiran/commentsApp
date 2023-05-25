// Write your code here
// Write your code here
const CommentItem = props => {
  const {commentIt, likeFunc, deleteFunc} = props
  const {id, name, comment, isLiked} = commentIt

  const onDelete = () => {
    deleteFunc(id)
  }

  const onLike = () => {
    likeFunc(id)
  }

  return (
    <li className="bg">
      <div className="bg1-1">
        <div>{name[0]}</div>
        <div>
          <div>
            <p>{name}</p>
            <p>Less than a minute ago</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="del_Like">
        {isLiked ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            alt="liked"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />
        )}
        <button type="button" onClick={onLike}>
          Like
        </button>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
