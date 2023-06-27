import React from "react";
import { useNavigate } from "react-router";
import "../../styles/homelist.css";

export const NewContact = () => {

    const navigate = useNavigate();

    return (
        <div className="container">
            <h1 className="text-center mt-3">Add a new contact</h1>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"><strong>Full Name</strong></label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="insert fullname"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"><strong>Email</strong></label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="insert email"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label"><strong>Phone</strong></label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="insert phone number"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"><strong></strong><strong>Adress</strong></label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="insert your adress"/>
            </div>
            <div class="mb-3">
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Save</button>
                </div>
            </div>
            <a onClick={() => navigate("/")} className="underline-primary linkhome">or get back to contact list</a>
        </div>
    )
}

