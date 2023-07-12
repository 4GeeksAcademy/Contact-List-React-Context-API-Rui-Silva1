import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/homelist.css";

const Modal = ({show, id}) => {

    const {store, actions} = useContext(Context);

    const [contactList, setContactList] = useState([]);

    // const [contact, setContact] = useState();

    const params = useParams();


    useEffect(() => {
        initAgenda();
    },[]) 

    const initAgenda = () => {
        actions.changeAgenda('4geeks_agenda')
    }

    // const fetchContacts = () => {
    //     fetch("https://assets.breatheco.de/apis/fake/contact/agenda/" + store.agenda, {
    //         method: "GET",
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
    //         // setContactList(data);
    //     })
    //     .catch(error => {
    //         //error handling
    //         console.log(error);
    //     });
    // }

    const deleteContact = () => {
        fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
            method: "DELETE",
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
            alert('Contact has been deleted...!')
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        Are you sure you want to delete user?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => {deleteContact(); show(false)}}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;