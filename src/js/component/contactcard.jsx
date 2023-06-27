import React from "react";
import { useNavigate } from "react-router";
import "../../styles/homelist.css";

export const ContactCard = () => {

    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="card" style={{width: "30rem"}} >
                <img className="rounded-circle mx-auto d-block mt-2" src="https://picsum.photos/200"  alt="..."/>
                <div className="card-body text-center mt-2">
                    <h5 className="card-title">Full name</h5>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item"><i class="col-auto fas fa-map-marker-alt"></i>  Adress</li>
                    <li className="list-group-item"><i class="col-auto fas fa-phone"></i>  Phone number</li>
                    <li className="list-group-item"><i class="col-auto far fa-envelope"></i>  Email</li>
                </ul>
                <div className="card-body">
                    <a onClick={() => navigate("/")} href="#" className="card-link contactLink">Go back to contact list</a>
                </div>
            </div>
        </div>
    )
}
