import Topbar from "../../components/Topbar/Topbar"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Foods = () => {
    return (
        <div className="container pt-10">
            <div className="topbar">

                <Topbar heading="Foods" desc="Here is your menu summary" />
                <div className="right-topbar">
                    <input type="text" className="topbar-input" placeholder="search here"/>
                    <button className="buttonn"><PersonAddIcon /> &nbsp; New Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Foods