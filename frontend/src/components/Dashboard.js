import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { Heading, Input1, Input2, Container, Button } from "./Styles";
import "./Dashboard.css";

const Dashboard = () => {
  const [copyText1, setCopyText1] = useState("");

  const handleCopyText1 = (e) => {
    setCopyText1(e.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText1);
    alert(`You have copied "${copyText1}"`);
  };

  //  ends copy code

  const url = "http://localhost:5000";

  const [subscriber, setSubscriber] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [letterContent, setLetterContent] = useState("");
  const [subject, setSubject] = useState("");

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(
      url + "/newsubscriber/getbyuser/" + currentUser._id
    );
    const data = await res.json();
    setSubscriber(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displaySubscriber = () => {
    if (!loading) {
      return subscriber.map(({ name, email }) => (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      ));
    }
  };

  const sendMail = async (recAddress) => {
    const res = await fetch("http://localhost:5000/util/sendmail", {
      method: "POST",
      body: JSON.stringify({
        from: "newsletterproject2022@gmail.com", // sender address
        to: recAddress, // list of receivers
        subject: subject,
        html: letterContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  };

  const sendNewsLetter = () => {
    subscriber.forEach(({ email }) => {
      console.log("mail sent to " + email);
      sendMail(email);
    });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="productlist backcolor">
      <div className="container">
        <br />

        <div className="backcolor1">
          <Heading className="text-dark">Find your Subscribers!</Heading>
          
          <table className="table backcolor1 mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>{displaySubscriber()}</tbody>
          </table>
        </div>

        <br />

        <div className="backcolor1">
          <Heading className="text-center text-dark ">To Use Plugin Copy the Code Below : </Heading>
          <Container className="mt-5">
            <Input1
              type="text"
              className="m-4"
              value={`<div id="plugin" ownerKey="${currentUser._id}"></div>`}
              placeholder="Enter the text you want to copy"
            />

            <button style={{marginLeft: "22px"}} className="btn btn-primary" onClick={(e) =>
                copyText(
                  `<div id="plugin" ownerKey="${currentUser._id}"></div>`
                )
              }>
                Copy to Clipboard
              </button>
              <br />
              <br />
              <button style={{marginLeft: "22px"}} className="btn btn-primary" onClick={(e) =>
               window.location.href='https://drive.google.com/file/d/1YMfaTmXStwMuheBmfAQeQDKspMC8080w/view?usp=sharing'
              } >Download Files</button>
              <br />
              <br />
              
          </Container>
        </div>


        {/* ends */}
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
