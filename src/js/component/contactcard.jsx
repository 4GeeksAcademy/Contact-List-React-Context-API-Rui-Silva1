import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../../styles/homelist.css";
import nicerobot from "../../img/nicerobot.png";

const ContactCard = () => {

    const navigate = useNavigate();

    const params = useParams();

    const [contact, setContact] = useState();

    useEffect(() => {
        fetchOneContact();
    },[])

    const fetchOneContact = () => {
        fetch("https://assets.breatheco.de/apis/fake/contact/" + params.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        })
        .then(data => {
            //here is where your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            setContact(data);
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    return (
        <div className="container mt-5">
            {contact ? (
                <div className="card container justify-content-center" style={{width: "30rem"}} >
                    <img className="rounded-circle mx-auto d-block mt-2 roundimage" src={nicerobot}  alt="..."/>
                    <div className="card-body text-center mt-2">
                        <h5 className="card-title">{contact.full_name}</h5>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item"><i className="col-auto fas fa-map-marker-alt me-2"></i>  {contact.address}</li>
                        <li className="list-group-item"><i className="col-auto fas fa-phone me-2"></i>  {contact.phone}</li>
                        <li className="list-group-item"><i className="col-auto far fa-envelope me-2"></i>  {contact.email}</li>
                    </ul>
                    <div className="card-body">
                        <a onClick={() => navigate("/")} href="#" className="card-link contactLink">Go back to contact list</a>
                    </div>
                </div>
            ) : (
                <div>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                </div>
            )}
        </div>
    )
}

export default ContactCard;