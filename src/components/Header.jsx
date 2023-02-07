import { FaNetworkWired } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

const Header = () => {

    return(
        <div>
            <div>
                <FaNetworkWired />
                <p>Intranet</p>
            </div>
            <div>
                <MdLogin />
                <p>Connexion</p>
            </div>
        </div>
    )
}

export default Header;