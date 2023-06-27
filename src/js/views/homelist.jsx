import React from "react";
import { useNavigate } from "react-router";
import "../../styles/homelist.css";


export const HomeList = () => {

    const navigate = useNavigate();

    return (
        <div className="container">
            <nav class="navbar bg-body-tertiary">
                <form class="container-fluid justify-content-end">
                    <button onClick={() => navigate("/addcontact")} class="btn btn-success me-2" type="button">Add new contact</button>
                </form>
            </nav>
            <div className="container card">
                <div className="row g-0 align-items-center">
                    <div className="col-md-2">
                        <img className="roundimage rounded-circle" src="https://picsum.photos/200" alt="..."/>
                    </div>
                    <div className="col-md-5 ms-5">
                        <div className="card-body">
                            <h5 onClick={() => navigate("/contactcard")} className="card-title">This is my name</h5>
                            <div className="row text-secondary pt-1">
                                <i class="col-auto fas fa-map-marker-alt pt-1"></i>
                                <p className="col card-text ps-1">this my Adress</p>
                            </div>
                            <div className="row text-secondary pt-1">
                                <i class="col-auto fas fa-phone pt-1"></i>
                                <p className="col card-text text-secondary ps-1"><small>this my phone</small></p>
                            </div>
                            <div className="row text-secondary pt-1">
                                <i class="col-auto far fa-envelope pt-1"></i>
                                <p className="col card-text text-secondary ps-1"><small className="text-muted">this is my email</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-auto ms-5 me-3">
                                <i class="fas fa-edit homeButton"></i>
                            </div>
                            <div className="col-auto ps-3 ms-3">
                                <i class="fas fa-trash homeButton"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

