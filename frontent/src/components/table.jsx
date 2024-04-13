import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Button from 'react-bootstrap/Button';

function BasicExample() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/manager/', {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
          }
        });
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert("login again")
        navigate('/')
      }
    };

    fetchData();
  }, []);

  const handlEvent = (id) => {
    const apiUrl = `http://localhost:8000/api/v1/manager/delete/${id}/`;
    

    // Configuration object with the Authorization header
  

    // POST request with Axios
    axios
      .post(apiUrl)
      .then((response) => {
        // Handle the response here
        // alert(response.data.responce.message);
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        // Handle the error here
        alert(error);
      });
  };



  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('password copied to clipboard');
    }).catch(err => {
     alert('Failed to copy text: ', err);
    });
  }
  



  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>ACCOUNT</th>
          <th>USERNAME</th>
          <th>PASSWORD</th>
        </tr>
      </thead>
      <tbody>
      {data.map(item => (
        
        <tr key={item.id}>
          <td>{item.Account_Name} </td>
          <td>{item.username} </td>
          <div className="box">
          <td>******** </td>
          <div className="btn">
          <Button variant="outline-dark" onClick={() => copyToClipboard(item.password)}><i className="bi bi-clipboard"></i></Button>
          <Button variant="outline-dark" onClick={() => handlEvent (item.id)}><i className="bi bi-trash"></i></Button>
          </div>
          </div>
        </tr>
      ))}
        
        {console.log(data)}
       
      </tbody>

    </Table>
  );
}

export default BasicExample;



