import React from 'react'

const FormolairAcces = () => {
  return (
   <>
   
     <div className="content-body">
			<div className="page-titles">
					
                </div>
   <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-xxl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Form step</h4>
                            </div>
                            <div className="card-body">
								<div id="smartwizard" className="form-wizard order-create">
									<ul className="nav nav-wizard">
										<li><a className="nav-link" href="#wizard_Service"> 
											<span>1</span> 
										</a></li>
										<li><a className="nav-link" href="#wizard_Time">
											<span>2</span>
										</a></li>
										<li><a className="nav-link" href="#wizard_Details">
											<span>3</span>
										</a></li>
										<li><a className="nav-link" href="#wizard_Payment">
											<span>4</span>
										</a></li>
									</ul>
									<div className="tab-content">
										<div id="wizard_Service" className="tab-pane" role="tabpanel">
											<div className="row">
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">First Name*</label>
														<input type="text" name="firstName" className="form-control" placeholder="Parsley" required/>
													</div>
												</div>
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">Last Name*</label>
														<input type="text" name="lastName" className="form-control" placeholder="Montana" required/>
													</div>
												</div>
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">Email Address*</label>
														<input type="email" className="form-control" id="inputGroupPrepend2" aria-describedby="inputGroupPrepend2" placeholder="example@example.com.com" required/>
													</div>
												</div>
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">Phone Number*</label>
														<input type="text" name="phoneNumber" className="form-control" placeholder="(+1)408-657-9007" required/>
													</div>
												</div>
												<div className="col-lg-12 mb-3">
													<div className="mb-3">
														<label className="text-label form-label">Where are you from*</label>
														<input type="text" name="place" className="form-control" required/>
													</div>
												</div>
											</div>
										</div>
										<div id="wizard_Time" className="tab-pane" role="tabpanel">
											<div className="row">
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">Company Name*</label>
														<input type="text" name="firstName" className="form-control" placeholder="Cellophane Square" required/>
													</div>
												</div>
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">Company Email Address*</label>
														<input type="email" className="form-control" id="emial1" placeholder="example@example.com.com" required/>
													</div>
												</div>
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">Company Phone Number*</label>
														<input type="text" name="phoneNumber" className="form-control" placeholder="(+1)408-657-9007" required/>
													</div>
												</div>
												<div className="col-lg-6 mb-2">
													<div className="mb-3">
														<label className="text-label form-label">Your position in Company*</label>
														<input type="text" name="place" className="form-control" required/>
													</div>
												</div>
											</div>
										</div>
										<div id="wizard_Details" className="tab-pane" role="tabpanel">
											<div className="row">
												<div className="col-sm-4 mb-2">
													<h4>Monday *</h4>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="9.00" type="number" name="input1" id="input1"/>
													</div>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="6.00" type="number" name="input2" id="input2"/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-4 mb-2">
													<h4>Tuesday *</h4>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="9.00" type="number" name="input3" id="input3"/>
													</div>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="6.00" type="number" name="input4" id="input4"/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-4 mb-2">
													<h4>Wednesday *</h4>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="9.00" type="number" name="input5" id="input5"/>
													</div>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="6.00" type="number" name="input6" id="input6"/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-4 mb-2">
													<h4>Thrusday *</h4>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="9.00" type="number" name="input7" id="input7"/>
													</div>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="6.00" type="number" name="input8" id="input8"/>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-4 mb-2">
													<h4>Friday *</h4>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="9.00" type="number" name="input9" id="input9"/>
													</div>
												</div>
												<div className="col-6 col-sm-4 mb-2">
													<div className="mb-3">
														<input className="form-control" value="6.00" type="number" name="input10" id="input10"/>
													</div>
												</div>
											</div>
										</div>
										<div id="wizard_Payment" className="tab-pane" role="tabpanel">
											<div className="row emial-setup">
												<div className="col-lg-3 col-sm-6 col-6">
													<div className="mb-3">
														<label for="mailclient11" className="mailclinet mailclinet-gmail">
															<input type="radio" name="emailclient" id="mailclient11"/>
															<span className="mail-icon">
																<i className="mdi mdi-google-plus" aria-hidden="true"></i>
															</span>
															<span className="mail-text">I'm using Gmail</span>
														</label>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 col-6">
													<div className="mb-3">
														<label for="mailclient12" className="mailclinet mailclinet-office">
															<input type="radio" name="emailclient" id="mailclient12"/>
															<span className="mail-icon">
																<i className="mdi mdi-office" aria-hidden="true"></i>
															</span>
															<span className="mail-text">I'm using Office</span>
														</label>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 col-6">
													<div className="mb-3">
														<label for="mailclient13" className="mailclinet mailclinet-drive">
															<input type="radio" name="emailclient" id="mailclient13"/>
															<span className="mail-icon">
																<i className="mdi mdi-google-drive" aria-hidden="true"></i>
															</span>
															<span className="mail-text">I'm using Drive</span>
														</label>
													</div>
												</div>
												<div className="col-lg-3 col-sm-6 col-6">
													<div className="mb-3">
														<label for="mailclient14" className="mailclinet mailclinet-another">
															<input type="radio" name="emailclient" id="mailclient14"/>
															<span className="mail-icon">
																<i className="fa fa-question-circle"
																	aria-hidden="true"></i>
															</span>
															<span className="mail-text">Another Service</span>
														</label>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-12">
													<div className="skip-email text-center">
														<p>Or if want skip this step entirely and setup it later</p>
														<a href="javascript:void(0)">Skip step</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
   </>
  )
}

export default FormolairAcces
