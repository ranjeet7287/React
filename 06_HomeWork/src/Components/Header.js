import logo from "../assest/logo.png"
const LogoLocation=()=>{
    return(
        <div id="logo-location">
            <div>
                <img alt="logo" id="logo-img" src={logo}/>
            </div>
            <div>
                <input
                id="search-location" 
                type="text"
                placeholder="Enter Your Location"
                />
                <button id="Search-btn">Search</button>
            </div>
        </div>
    );
}
const HeaderList=()=>{
    return(
        <div id="headerlist">
            <ul>
                <li>🏠NewHome</li>
                <li>❤️Liked</li>
                <li>📞Help</li>
                <li>🧑‍💼Sigin</li>
            </ul>
        </div>
    );
}
const Header=()=>{
    return(
        <div id="Header">
            <LogoLocation/>
            <HeaderList/>
        </div>
    );
}
export default Header;
