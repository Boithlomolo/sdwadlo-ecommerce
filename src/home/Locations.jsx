import React from 'react';
import { Link } from 'react-router-dom';

const title = "More Then 5,000 Customers";

const desc = "Buy clothing items on your any device & start to shopping";

const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
];

const Locations = () => {
    return (
        <div className="clients-section style-2 padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                </div>
                {/*main content*/}
                <div className="section-wrapper">
                    <div className="clients">
                        {
                            clientsList.map((val, i) => (
                                <div key={i} className="client-list">
                                    <Link to="/sign-up" className="client-content">
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className="client-thumb">
                                        <img src={val.imgUrl}alt=""/>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Locations;