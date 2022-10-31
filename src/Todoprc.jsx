import React,{useState} from 'react'

function Todo(props) {

  const [input,setinput] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")


 function Submit(){
  if(input == ''){
    alert("your  input is Empty")
  }else if(email == ''){
    alert("Your  input is Empty")
   }else if(password == ""){
    alert("your  input is Empty")
   }
 }

  return <>
 
   <div className="container ">
    <div className="row  ">
      <div className="col-md-3 offset-md-4 main mt-5   ">
        <h1 className='text-center mt-5'>Login Form</h1>
  <span className='fs-5 fw-bold '>Name</span> : <input className='mt-3 ms-3' placeholder='Name' type="text" value={input} onChange={(e)=>{setinput(e.target.value)}}/> {input.length == '' ? <div className='error'>Input is Empty</div> : "" }
  <div>
  <span className='fs-5 fw-bold'>Email</span> : <input className='mt-3 ms-4'  placeholder='Email' type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/> {email.length == '' ? <div className='error'>Input is Empty</div> : "" }
  </div>
  <div>
<span className='fs-5 fw-bold'>Password</span>  <input className='mt-3'  placeholder='Password' type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/> {password.length == '' ? <div className='error'>Input is Empty</div> : "" }
  </div>
  <div className="col text-center">
  <button className='btn btn-primary mt-5' onClick={Submit}>Submit</button>
  </div>
</div>
  </div>

  </div>

      

  </>
   
  
   
}

export default Todo
