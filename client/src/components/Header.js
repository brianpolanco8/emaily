import React, {Component} from 'react';


export default class Header extends Component {
    render (){
        return (
            <nav>
                <div className={"nav-wrapper"}>
                    <a href={"/"} className="left brand-logo">
                        Emaily
                    </a>
                    <ul className={"right"}>
                        <li>
                            <a href={"/auth/google"}>Login with google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

