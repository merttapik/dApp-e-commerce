import { getSession, signOut } from 'next-auth/react';
import Users from '../modul/userSchema';
import connectDB from '../lib/connectDB';
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function User({ user, bio }) {

    const[value, changeValue]=useState("New Bio");

    async function updateBio(){
        const{data}=await axios.post(
            "api/updateBio",
            {profileId: user.profileId, bio: value},
            {
                headers: {
                    "content-type": "application/json",
                },
            }
        );
        console.log("update e tiklandi");
        console.log("Bio updated to: " + data.bio);

        location.reload();
    }


    return (
        <div className='text-center d-flex justify-content-center'>
           <h1>User Session</h1>
           
            <Card style={{ width: '100rem' }}>
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Title>Address:{user.address}</Card.Title>
        <Card.Text>
           You can change your Bio 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Bio: {bio}</ListGroup.Item>
        <ListGroup.Item>Update your Bio</ListGroup.Item>
        <ListGroup.Item> <input
            onChange={(e) => changeValue(e.target.value)} value={value}
            ></input></ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <button onClick={() => signOut({ redirect: '/' })}>Sign out</button>
        <button onClick={() => updateBio()}>update Bio</button>
      </Card.Body>
    </Card>
        </div>
       
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    await connectDB();

    const userM= await Users.findOne({profileId: session?.user.profileId}).lean();

    if (userM !== null) {
        userM.bio=userM.bio.toString();
    }
    return {
        props: { user: session.user,bio: userM.bio },
    };
}

export default User;
