import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import AlertSuccess from "./AlertSuccess";


export default function Read() {
    const [dataAPI, setDataAPI] = useState([]);
    const [load, setLoad] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://636bfe43ad62451f9fc134a1.mockapi.io/fakeData`)
                .then((response) => {
                    setDataAPI(response.data);

                    setLoad(true)
                    // setAlertSuccess(true)
                })
        }, 200);

    }, [])

    useEffect(() => {
        setTimeout(() => {
            setAlertSuccess(true)
        }, 500)
    }, []);

    const setData = (data) => {
        let { id, title, desc } = data
        localStorage.setItem('ID', id);
        localStorage.setItem('TITLE', title);
        localStorage.setItem('DESC', desc);
    }

    const onDelete = (id) => {
        axios.delete(`https://636bfe43ad62451f9fc134a1.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            }).then(() => {
                navigate('/read')
            });
    }
    const getData = () => {
        axios.get(`https://636bfe43ad62451f9fc134a1.mockapi.io/fakeData`)
            .then((getData) => {
                setDataAPI(getData.data)
            });
    }

    return (
        <>
            {!load && <Loading />}
            {!alertSuccess && <AlertSuccess />}

            <Card.Group className="card-group">
                {dataAPI.map((data) => {
                    return (
                        <Card className="card">
                            <Card.Content >
                                <Card.Header className="title-card">{data.title}</Card.Header>
                                <Card.Meta>
                                    details:
                                </Card.Meta>
                                <Card.Description className="desc-card">
                                    {data.desc}
                                </Card.Description>
                            </Card.Content>

                            <Link to="/update">
                                <Button onClick={() => setData(data)}>Update</Button>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Link>
                        </Card>
                    )
                })}
            </Card.Group>
        </>
    );
}