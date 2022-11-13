import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import Loading from "./Loading";


export default function Update() {


    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();

    const [id, setID] = useState(null);

    let navigate = useNavigate();

    const [load, setLoad] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 700)
        setID(localStorage.getItem('ID'));
        setTitle(localStorage.getItem('TITLE'));
        setDesc(localStorage.getItem('DESC'));

    }, [])

    const updateAPIData = () => {
        axios.put(`https://636bfe43ad62451f9fc134a1.mockapi.io/fakeData/${id}`, {
            title,
            desc
        }).then(() => {
            navigate('/read');
        })
    }
    const cancelUpdate = () => {
        navigate('/read');
    }



    return (
        <>
            {!load ? <Loading /> :
                <Form className='create-form'>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Task title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder='Task description' value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </Form.Field>
                    <Button type='submit' onClick={updateAPIData}>Update</Button>
                    <Button type='submit' onClick={cancelUpdate}>Cancel</Button>
                </Form>
            }

        </>
    );
}