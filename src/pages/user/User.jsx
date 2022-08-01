import './user.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Upload } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to={'/newUser'}>
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                        alt="" 
                        className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10-12-2000</span>
                    </div>
                    <span className="userShowTitle">Contacts Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 234 5678 9101</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text"
                                placeholder='annabeck99'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text"
                                placeholder='Anna Becker'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text"
                                placeholder='annabeck99@gmail.com'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text"
                                placeholder='+1 234 5678 9101'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text"
                                placeholder='New York | USA'
                                className='userUpdateInput'
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img 
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                                alt="" 
                                className="userUpdateImg" 
                            />
                            <label htmlFor="file"><Upload className='userUpdateIcon'/></label>
                            <input type="file" id='file' 
                            style={{display: 'none'}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
