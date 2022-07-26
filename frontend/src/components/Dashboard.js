import React, { useState, useEffect } from 'react'

const Dashboard = () => {

  const url= "http://localhost:5000";

  const [subscriber, setSubscriber] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url+'/newsubscriber/getall');
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



  return <div className='productlist bg-light'>
      <div className="container">
        

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

      </div>
      </div>
 
}

export default Dashboard;