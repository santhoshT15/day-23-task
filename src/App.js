
import './App.css';


function App() {
  return (
    <div className='main'>
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Card1 (){
   
  return (
    <div className="card">
      <div className="cardBody">
        <div className="header">
          <h5 className="cTitle">Free</h5>
          <h2 className="cPrice">$0 /monthly</h2>
        </div>
        <hr></hr>
        <div className="cDescription">
            <ul>
              <li className="checked">Single User</li>
              <li className="checked">50GB Stroage</li>
              <li className="checked">Unlimited Public Projects</li>
              <li className="checked">Community Access</li>
              <li className="unchecked">Unlimited Private Projects</li>
              <li className="unchecked">Dedicated Phone Support</li>
              <li className="unchecked">Free Subdomain</li>
              <li className="unchecked">Monthly Status Reports</li>
            </ul>
        </div>
        <div className="footer">
          <button className="btn">Button</button>
        </div>
      </div>
    </div>
  );
}

function Card2 (){
   
  return (
    <div className="card">
      <div className="cardBody">
        <div className="header">
          <h5 className="cTitle">PLUS</h5>
          <h2 className="cPrice">$9 /monthly</h2>
        </div>
        <hr></hr>
        <div className="cDescription">
            <ul>
              <li className="checked">5 User</li>
              <li className="checked">50GB Stroage</li>
              <li className="checked">Unlimited Public Projects</li>
              <li className="checked">Community Access</li>
              <li className="checked">Unlimited Private Projects</li>
              <li className="checked">Dedicated Phone Support</li>
              <li className="checked">Free Subdomain</li>
              <li className="unchecked">Monthly Status Reports</li>
            </ul>
        </div>
        <div className="footer">
          <button className="btn">Button</button>
        </div>
      </div>
    </div>
  );
}

function Card3 (){
   
  return (
    <div className="card">
      <div className="cardBody">
        <div className="header">
          <h5 className="cTitle">PRO</h5>
          <h2 className="cPrice">$49 /monthly</h2>
        </div>
        <hr></hr>
        <div className="cDescription">
            <ul>
              <li className="checked">Unlimited User</li>
              <li className="checked">50GB Stroage</li>
              <li className="checked">Unlimited Public Projects</li>
              <li className="checked">Community Access</li>
              <li className="checked">Unlimited Private Projects</li>
              <li className="checked">Dedicated Phone Support</li>
              <li className="checked">Free Subdomain</li>
              <li className="checked">Monthly Status Reports</li>
            </ul>
        </div>
        <div className="footer">
          <button className="btn">Button</button>
        </div>
      </div>
    </div>
  );
}
export default App;
