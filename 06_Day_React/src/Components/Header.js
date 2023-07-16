const Title= ()=>(
    <a href="#">
        <img id="logo" alt="logoImg" src="https://webdesigndev.com/wp-content/uploads/2021/10/1.image_.jpg"/>
    </a>
);
const HeaderComponents=()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Restraunt</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>👜Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default HeaderComponents;