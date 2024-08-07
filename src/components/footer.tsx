import React from 'react';
import '../css/font-awesome/css/font-awesome.min.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* <span className="copyright">Copyright &copy; Your Website 2014</span> */}
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li> */}
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              {/* <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
