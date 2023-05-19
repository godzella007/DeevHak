import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
<>

<div className="container mt-3">
<div className="content-body">
<div className="row">
<div className="col-lg-12">
    <div className="profile card card-body px-3 pt-3 pb-0">
        <div className="profile-head">
            <div className="photo-content">
                <div className="cover-photo rounded"></div>
            </div>
 <div className="profile-info">
<div className="profile-photo">
<img src="aymen.jpg" alt="Admin" className="rounded-circle" width={100} />
</div>
<div className="profile-details">
<div className="profile-name px-3 pt-2">
  <h4 className="text-primary mb-0">{currentUser.username}</h4>
  <p>Full Name</p>
</div>
<div className="profile-email px-2 pt-2">
  <h4 className="text-muted mb-0">{currentUser.email}</h4>
  <p>Email</p>
</div>
<div className="profile-name px-3 pt-2">
  <h4 className="text-primary mb-0"> <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul></h4>
  <p>Authorities</p>
</div>
</div>
            </div>
        </div>
    </div>
</div>
</div>

</div></div>
</>
   
  );
};

                                   
export default Profile;
