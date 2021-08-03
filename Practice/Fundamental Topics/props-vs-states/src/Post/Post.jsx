function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  
  function Post(props) {
    return (
      <div className='Post-br'>
        <div >
          <img className='Post-img'
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div>
            <u>{props.author.name}</u>
          </div>
        </div>
        <div>{props.text}</div>
        <div>
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
 

export default Post