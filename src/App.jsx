import { useState } from "react";
import axios from "axios";
import './App.css'
import TestApi from "./TestApi";
const App = () => {
    // Separate state for each input field
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    // Handle form submission
    const handleSubmit = async (event) => {
      console.log(name);
      
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/submit-form", {
                name,
                phone,
                address,
            });
            setMessage(response.data.message); // Show success message
        } catch {
            setMessage("Something went wrong. Try again!"); // Show error message
        }
    };

    return (
        // <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
        //     <h2 className="text-xl font-bold mb-3">User Form</h2>

        //     <form onSubmit={handleSubmit} className="space-y-3">
        //         <input 
        //             type="text" 
        //             placeholder="Enter Name" 
        //             value={name} 
        //             onChange={(e) => setName(e.target.value)} 
        //             className="border p-2 w-full rounded" 
        //             required 
        //         />

        //         <input 
        //             type="text" 
        //             placeholder="Enter Phone" 
        //             value={phone} 
        //             onChange={(e) => setPhone(e.target.value)} 
        //             className="border p-2 w-full rounded" 
        //             required 
        //         />

        //         <textarea 
        //             placeholder="Enter Address" 
        //             value={address} 
        //             onChange={(e) => setAddress(e.target.value)} 
        //             className="border p-2 w-full rounded" 
        //             required 
        //         />

        //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        //             Submit
        //         </button>
        //     </form>

        //     {/* Show message if available */}
        //     {message && <p className="mt-2 text-green-600">{message}</p>}
        // </div>
        <>
        <TestApi />
        </>
    );
};

export default App;
