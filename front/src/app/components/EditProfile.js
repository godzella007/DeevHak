import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const EditProfile  = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
	
  }

  return (
    <>
<div className="content-body">
<div className="container-fluid">
        <div className="row">
        <div className="col-xl-9 col-lg-8">
						<div className="card profile-card card-bx m-b30">
							<div className="card-header">
								<h6 className="title">Update Account </h6>
							</div>
							<form className="profile-form">
								<div className="card-body">
									<div className="row">
										<div className="col-sm-6 m-b30">
											<label className="form-label">Name</label>
											<input type="text" className="form-control" value={currentUser.username}/>
										</div>
										<div className="col-sm-6 m-b30">
											<label className="form-label">Surname</label>
                      <select className="default-select form-control" id="validationCustom05" value={currentUser.roles }>
												<option  data-display="Select">Please select</option>
												<option value="html">Particpant</option>
												<option value="css">Entriprise</option>
												<option value="javascript">Admin</option>
											</select>
										</div>
										<div className="col-sm-6 m-b30">
											<label className="form-label">Email address</label>
											<input type="text" className="form-control" value={currentUser.email} />
										</div>
									</div>
								</div>
								<div className="card-footer">
									<button className="btn btn-primary">UPDATE</button>
									<a href="page-register.html" className="btn-link">Forgot your password?</a>
								</div>
							</form>
						</div>
					</div>
        </div>
		</div>
	
      </div>
  
  
    </>
  )
}

export default EditProfile
