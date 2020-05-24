import Nav from './Nav';

const Header = () => {
  return (
    <div>
      <div className="bar">
        <a href="">BuYeg</a>
        <Nav></Nav>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  )
}

export default Header;