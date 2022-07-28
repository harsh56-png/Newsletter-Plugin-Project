import React, { useState, useEffect } from 'react'

const Dashboard = () => {

  const url= "http://localhost:5000";

  const [subscriber, setSubscriber] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [letterContent, setLetterContent] = useState("");
  const [subject, setSubject] = useState("");

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url+'/newsubscriber/getbyuser/'+currentUser._id);
    const data = await res.json();
    setSubscriber(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    getDataFromBackend();
  }, [])

  const displaySubscriber = () => {
    if(!loading){
      return subscriber.map(({name, email}) => (
        <tr>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
        ))
    }
  }

  const sendMail = async (recAddress) => {
    const res = await fetch('http://localhost:5000/util/sendmail', {
      method : 'POST',
      body : JSON.stringify({
        from: "newsletterproject2022@gmail.com", // sender address
        to: recAddress, // list of receivers
        subject: subject,
        html : letterContent
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    console.log(res);
  }

  const sendNewsLetter = () => {
    subscriber.forEach(({email}) => {
      console.log('mail sent to '+email);
      sendMail(email);
    })
  }

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  }

  return <div className='productlist bg-light'>
      <div className="container">
      <h2>Owner ID : {currentUser._id}</h2>
      <h4>To Use Plugin Copy the COde Below : </h4>

      <textarea value={`<div id="plugin" ownerKey="${currentUser._id}"></div>`} disabled className='form-control'></textarea>
<button className='btn btn-primary' onClick={e => copyText(`<div id="plugin" ownerKey="${currentUser._id}"></div>`)}>Copy Plugin Code</button>

      <table className='table table-dark mt-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
            {displaySubscriber()}
        </tbody>
      </table>
      <div className='card mt-5'>
        <div className='card-body'>
          <input className='form-control' onChange={e => setSubject(e.target.value)}  />
          <textarea className='form-control mt-4' rows="10" onChange={e => setLetterContent(e.target.value)}  ></textarea>
          <button className='btn btn-primary mt-4' onClick={sendNewsLetter}>Send</button>
        </div>
      </div>
      </div>
      </div>
 
}

export default Dashboard;