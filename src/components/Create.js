import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';




export default function Create() {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();




    let navigate = useNavigate();

    const create = () => {
        if (title.length <= 0 || desc.length <= 0) {
            alert('error');

        } else {
            axios.post('https://636bfe43ad62451f9fc134a1.mockapi.io/fakeData', {
                title,
                desc,
            }).then(() => {
                navigate('/read');
            })
        }
    }

    return (
        <>
            <Form className='create-form'>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Task title' id='title-value' onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Task description' onChange={(e) => setDesc(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={create}>Submit</Button>
            </Form>
        </>
    );
}

