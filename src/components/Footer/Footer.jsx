import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>MORENT</h2>
          <p>
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>About</h4>
            <p>How it works</p>
            <p>Featured</p>
            <p>Partnership</p>
            <p>Business Relation</p>
          </div>

          <div>
            <h4>Community</h4>
            <p>Events</p>
            <p>Blog</p>
            <p>Podcast</p>
            <p>Invite a friend</p>
          </div>

          <div>
            <h4>Socials</h4>
            <p>Discord</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2026 MORENT. All rights reserved</p>
        <div>
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
