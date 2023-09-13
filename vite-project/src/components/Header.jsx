import './Header.css';

function Header(){
    return (
        <header>
            <div className="container d-flex">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Business areas</a>
                        </li>
                        <li>
                            <a href="#">Featured images</a>
                        </li>
                        <li>
                            <a href="#">Gear cage</a>
                        </li>
                        <li>
                            <a href="#">Get template</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;