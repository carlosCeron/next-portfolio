import React from 'react'
import Link  from 'next/link';

export const PostCard = ({imageUrl, title, content}) => {
  return (
    <div className="col-md-4 h100">
      <div className="card">
        <div className="overflow">
          <img src={imageUrl} alt={title} className="card-img-top"/>
        </div>
        <div className="card-body">
          <h1>{title}</h1>
          <p>{content}</p>
          <Link href={`/post?title=${title}`} as={`/post/${title}`}>
            <a className='btn btn-light'>Leer mas</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
