import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "../../styles/homelist.css";
import { Context } from "../store/appContext.js";

const UpdateContact = () => {

    const navigate = useNavigate();

    const params = useParams();

    const {store, actions} = useContext(Context);

    const [contact, setContact] = useState();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

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
            setFullName(data.full_name);
            setAddress(data.address);
            setPhone(data.phone);
            setEmail(data.email);
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    const onSubmit = () => {
        if (fullName === '') {
            alert('Enter Full Name')
        }else if (address === '') {
            alert('Enter Address')
        }else if (phone === '' || phone.length !== 9) {
            alert('Enter Correct Phone Number')
        }else if (email === '' || !email.includes('@')) {
            alert('Enter Email')
        }else {
            const contact = {
                "full_name": fullName,
                "email": email,
                "agenda_slug": store.agenda,
                "address": address,
                "phone": phone
            }

            fetch("https://assets.breatheco.de/apis/fake/contact/" + params.id, {
            method: "PUT",
            body: JSON.stringify(contact),
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
                alert("Contact updated!")
                setAddress('');
                setEmail('');
                setFullName('');
                setPhone('');
            })
            .catch(error => {
                //error handling
                console.log(error);
            });
        }
    }

    return (
        <div className="container">
            <h1 className="text-center mt-3">Update contact</h1>
            <div className="mb-3">
                <label for="fullname" className="form-label"><strong>Full Name</strong></label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="fullname" 
                    placeholder="insert fullname" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="address" className="form-label"><strong>Adress</strong></label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="address" 
                    placeholder="insert address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label"><strong>Phone</strong></label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="phone" 
                    placeholder="insert phone number" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label"><strong></strong><strong>Email</strong></label>
                <input 
                type="text" 
                className="form-control" 
                id="email" 
                placeholder="insert your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <div className="d-grid gap-2">
                    <button onClick={onSubmit} className="btn btn-primary" type="button">Update</button>
                </div>
            </div>
            <a onClick={() => navigate("/")} className="underline-primary linkhome fst-italic">get back to <strong>contact list</strong></a>
        </div>
    )
}

export default UpdateContact;