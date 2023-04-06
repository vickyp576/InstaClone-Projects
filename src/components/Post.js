import React from "react";
import heart_icon from "../images/heart_icon.png"
import rocket_icon from "../images/rocket_icon.jpg"

export default function Post({post}) {

    const {name, location, likes, description, date, PostImage  } = post;
    
    return <>
        <div className='post-container'>
            <section className='post-header'>
                <p>
                    <span className='name'>{name}</span><br/>
                    <span className='place'>{location}</span>
                </p>
                <p>
                    <span className='dot'>&#9679;&#9679;&#9679;</span>
                </p>
            </section>

            <section className='post-img'>
                <img src={`https://instaclone-nodejs-sabeer.onrender.com/${PostImage}`} alt='Not available'/>
            </section>

            <section className='post-footer'>
                <div className='like-share-container'>
                    <div className='like-share-button'>
                        <div className='img-container'>
                            <img src={heart_icon} alt="heart_icon" />
                        </div>
                        <div className='img-container'>
                            <img src={rocket_icon} alt="rocket_icon" />
                        </div>
                    </div>
                    <span className='date'>{date}</span>
                </div>

                <div className='like'>{likes} likes</div>

                <p className='description'>
                    {description}
                </p>
            </section>
        </div>
    
    </>
}