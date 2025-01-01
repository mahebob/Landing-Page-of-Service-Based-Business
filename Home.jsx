import React, { useState } from 'react';
import { services } from '../sarvice';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import emailjs from '@emailjs/browser'
import { NavLink } from 'react-router';
import { FaCheck } from "react-icons/fa6";
const Home = () => { 
  const [formData, setFormData]=useState({
    name:'',
    email:'',
    message:''
  });
  const[loading, setLoding]=useState(false);
  const SERVICE_ID ="service_gvhcqui";
  const TEMPLATE_ID ="template_4oy346c";
  const PUBLIC_KEY ="pJfuYsdpyldn_Abdc";

  const handleChange = (e)=>{
    const{name, value} =e.target;
    setFormData(preState =>({
      ...preState,
      [name]: value
    }));
  
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoding(true);
    try{
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,{
          from_name: formData.name,
          from_email:formData.email,
          message:formData.message,
        },
        PUBLIC_KEY
      );
      if( !formData.name || !formData.email || !formData.message ){
        alert('please fill the form');
      }
      if( formData.name && formData.email && formData.message && response.status === 200 ){
        alert('Email Successfully Send!');
        setFormData({
          name:'',
          email:'',
          message:''
        });
      }
    } catch (error) {
      console.error('Email Failed', error); 
      alert('Email Sending Failed. Please try again later.'); 
  } finally {
      setLoding(false); 
  }
    
  };

  const [isOpen, setIsOpen] = useState(false);
 

 



  return (
    <div className="min-h-screen bg-blue-600">
    {/* Navbar */}
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          <ul className="flex flex-wrap gap-6 items-center">
        <li className=" font-medium transition-all duration-300 font-serif hover:text-blue-600">
     <NavLink to={'/'} className="border-b-2 border-blue-500 text-blue-600 scale-105">Home</NavLink>
        </li>
        <li className=" font-medium transition-all duration-300 font-serif hover:text-blue-600">
        <NavLink to={'/Service'}>Service</NavLink>
        </li>
        <li className=" font-medium transition-all duration-300 font-serif hover:text-blue-600">
    <NavLink to={'/About'}>About</NavLink>
        </li>
        <li className="font-medium transition-all duration-300 font-serif hover:text-blue-600">
        
          <NavLink to={'/Contact'} >Contact</NavLink> 
         
        </li>
      
      </ul> 
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-blue-600" 
            onClick={()=>setIsOpen(!isOpen)}
            >
              
            {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start">
            <ul className="flex flex-col gap-6 items-start">
        <li className=" font-medium transition-all duration-300 font-serif hover:text-blue-600">
     <NavLink to={'/'} className="border-b-2 border-blue-500 text-blue-600 scale-105">Home</NavLink>
        </li>
        <li className=" font-medium transition-all duration-300 font-serif hover:text-blue-600">
      <NavLink to={'/Service'}>Service</NavLink>
        </li>
        <li className=" font-medium transition-all duration-300 font-serif hover:text-blue-600">
     <NavLink to={'/About'}>About</NavLink>
        </li>
        <li className="font-medium transition-all duration-300 font-serif hover:text-blue-600">
        
          <NavLink to={'/Contact'} >Contact</NavLink> 
         
        </li>
      
      </ul> 
            
          </div>
        )}
      </div>
    </nav> 
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Business with Digital Solutions
            </h1>
            <p className="text-white mb-8">
              We provide cutting-edge technology services to help your business grow and succeed in the digital age.
            </p>
          
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100">
          Get started now
          </button>


          </div>
        </div>
    

      {/* Services Section */}
      <section className="py-20 bg-slate-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl  font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
          {
            services.map((v,i)=>{
              return(
                <div key={i} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-600 mb-6">{v.description}</p>
                <ul className="space-y-3">
     
      {v.features.map((index,sar)=>{
                    return(
                      <li key={sar} className="flex items-center text-gray-700">
                    <FaCheck className='size-6 text-green-500' /> 
                      {index}
                    </li>
                    )
                  })}
                </ul>
                </div>
              )
            })
          }
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
              <FiPhone className='size-8' /> 
                <div>
               <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center">
              <MdOutlineEmail className='size-8'/>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@yourcompany.com</p>
                </div>
              </div>
              <div className="flex items-center">
              <LuMapPin className='size-8'/>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Business Street, City, Country</p>
                </div>
              </div>
            </div>
            <form  onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type='submit' disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 w-full">
               {loading ? 'Email is Sending...' : 'Message Send'} 
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>&copy; 2024 YourCompany. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;