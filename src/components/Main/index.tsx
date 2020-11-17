import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


const Main: React.FC = () => {
    return (
        <div>
            <div className="container">
                <h1>Test task by <a href="https://portfolio-ponomarev.netlify.app/" target="_blank">Ponomarev Evgeniy</a></h1>
                <p className="text">
                    I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
                    I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.
                    At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
                </p>
                <Button type="primary">
                    <Link to="/rgb" className="button">Test task</Link>
                </Button>
            </div>
        </div>
    )
}
  
export default Main; 