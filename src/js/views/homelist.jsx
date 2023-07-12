import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import "../../styles/homelist.css";
import nicerobot from "../../img/nicerobot.png";
import Modal from "../component/modal.jsx";

const HomeList = () => {

    const navigate = useNavigate();

    const {store, actions} = useContext(Context);

    const [contactList, setContactList] = useState([]);

    const [show, setShow] = useState(false)

    useEffect(() => {
        initAgenda();
        fetchContacts();
    },[]) 

    console.log(show);
    
    useEffect(() => {
        fetchContacts();
    },[show])

    const initAgenda = () => {
        actions.changeAgenda('4geeks_agenda')
    }

    const fetchContacts = () => {
        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/" + store.agenda, {
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
            setContactList(data);
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    // const deleteContact = (contactId) => {
    //     fetch("https://assets.breatheco.de/apis/fake/contact/" + contactId, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(resp => {
    //         console.log(resp.ok); // will be true if the response is successfull
    //         console.log(resp.status); // the status code = 200 or code = 400 etc.
    //         console.log(resp); // will try return the exact result as string
    //         return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    //     })
    //     .then(data => {
    //         //here is where your code should start after the fetch finishes
    //         console.log(data); //this will print on the console the exact object received from the server
    //         alert('Contact has been deleted...!')
    //         fetchContacts();
    //     })
    //     .catch(error => {
    //         //error handling
    //         console.log(error);
    //     });
    // }

    const handleShow = (newValue) => {
        setShow(newValue)
    }

    const showContacts = () => {
        return contactList.map((contact, index) => {
            return(
                <div key={index}>
                    <div className="container card mb-2">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-2">
                                <img className="roundimage rounded-circle" src={nicerobot} alt="..."/>
                            </div>
                            <div className="col-md-5 ms-5">
                                <div className="card-body">
                                    <h5 onClick={() => navigate("/contactcard/" + contact.id )} className="card-title"><a href="">{contact.full_name}</a></h5>
                                    <div className="row text-secondary pt-1">
                                        <i className="col-auto fas fa-map-marker-alt pt-1"></i>
                                        <p className="col card-text ps-1">{contact.address}</p>
                                    </div>
                                    <div className="row text-secondary pt-1">
                                        <i className="col-auto fas fa-phone pt-1"></i>
                                        <p className="col card-text text-secondary ps-1"><small>{contact.phone}</small></p>
                                    </div>
                                    <div className="row text-secondary pt-1">
                                        <i className="col-auto far fa-envelope pt-1"></i>
                                        <p className="col card-text text-secondary ps-1"><small className="text-muted">{contact.email}</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="row">
                                    <div className="col-auto ms-5 me-3">
                                        <i className="fas fa-edit homeButton" onClick={() => navigate("/updatecontact/" + contact.id)}></i>
                                    </div>
                                    <div className="col-auto ps-3 ms-3">
                                        <i className="fas fa-trash homeButton" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {setShow(true); setFlag(true)}}></i>
                                        <Modal show={handleShow} id={contact.id} />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <nav className="navbar bg-body-tertiary">
                <form className="container justify-content-end p-0">
                    <button onClick={() => navigate("/addcontact")} className="btn btn-success" type="button">Add new contact</button>
                </form>
            </nav>
            <div>
                {showContacts()}
            </div>
        </div>
    )
}

export default HomeList;