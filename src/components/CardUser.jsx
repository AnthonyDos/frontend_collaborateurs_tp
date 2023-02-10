import { MdEmail } from "react-icons/md";
import { FaPhone, FaBirthdayCake } from "react-icons/fa";
import "../assets/css/cardUser/cardUser.css";

const CardUser = (props) => {
    const {collaborator} = props;

    const GetAge = (date) => {
        let dateOfDay = new Date();
        let birthdate = new Date(date);
        let age = dateOfDay.getFullYear() - birthdate.getFullYear();
        let month = dateOfDay.getMonth() - birthdate.getMonth();
        if (month < 0 || (month === 0 && dateOfDay.getDate() < birthdate.getDate()) ) {
            age--;
        }
        return age
    }
    const ageCollab = GetAge(collaborator?.birthdate)
    const GetMonthLetters = (date) => {
        let month = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]
        let birthdate = new Date(date);
        let dayBirthdate = birthdate.getDate();
        let monthBirthdate = birthdate.getMonth();
        const monthLetters = month.filter((monthLetters,index) => index === monthBirthdate)
        return `${dayBirthdate} ${monthLetters}`;
    }
    const monthBirthdayLetters = GetMonthLetters(collaborator?.birthdate);
    return(
        <div className="card_info_container">
            <div className="container_img">
                <img className="img_profile" src={collaborator?.photo} alt="photo de profil" />
            </div>
            <div className="information_collab">
                <div className="category">
                    <p className="name_category">{collaborator?.category}</p>
                </div>
                <div className="container_info_collab">
                    <h3 className="info_collab">{`${collaborator?.lastname} ${collaborator?.firstname } (${ageCollab} ans)`}</h3>
                    <p className="info_collab">{`${collaborator?.city}, ${collaborator?.country } `}</p>
                    <div className="contact_direct">
                        <p className="info_collab">
                            <MdEmail />
                            <a className="contact" href="mailto:collaborator?.email">{collaborator?.email}</a>
                        </p>
                        <p className="info_collab">
                            <FaPhone /> 
                            <a className="contact" href="tel:collaborator?.phone">{collaborator?.phone}</a>
                        </p>
                    </div>
                    <p className="info_collab"><FaBirthdayCake /> Anniversaire : {monthBirthdayLetters}</p>
                </div>
            </div>
        </div>
    )
}

export default CardUser;