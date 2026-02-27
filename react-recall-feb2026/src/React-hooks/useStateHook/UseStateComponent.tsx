import React, {useState} from 'react';
interface Name{
    id:number;
    name:string;
}
interface RegistrationDetails {
  name: string;
  email: string;
  contactNumber: number;
  qualification: string;
  nationality: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
  };
}
const initialValue=()=>{
    console.log("functiona called");
    return 0;
}
const UseStateComponent=(): React.FC=>{
const [firstState , setFirstState ] = useState<String>("First value");
const [boolState, SetBoolState] = useState<boolean>(false);
//const [steps, setSteps] = useState<number>(initialValue());  // If initial value come from heavey ops, use this Initlal func.
const [steps, setSteps] = useState<number>(0); 
const [name, setName] = useState<string>("");
const [names, setNames] = useState<Name[]>([]);   // Object array or any data type array
const [formData, setFormData] = useState<RegistrationDetails>({
    name: '',
    email: '',
    contactNumber: 0,
    qualification: '',
    nationality: '',
    address: {
      street: '',
      area: '',
      city: '',
      state: '',
      country: '',
      pincode: 0,
    },
  });

const handleStateValue=()=>{
    console.log("button click event");
    setFirstState("Button click");
    SetBoolState(!boolState);
}
const increment=()=>{
    //setSteps(steps+1); setStepes(steps+1);   do ony one time increment
    //setSteps((prevState)=> prevState+1);  setSteps((prevState)=> prevState+1); do proper 2 increment
    setSteps((prevState)=> prevState+1);   
    

}
const decrement=()=>{
    setSteps((prevState)=> prevState-1)
}
function addNames(e){
    e.preventDefault();
    setNames([...names, { id: names.length, name:name }]);
    //setNames([...names, {  name }]);  // this also work , but key error for array iteration gives error, {names.map((item) => ( <li> {item.name} </li> )) }   
    setName("")
}

 // Handle updates for top-level fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  // Handle updates for nested address fields
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: type === 'number' ? Number(value) : value,
      },
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };
return(
    <>
        <h1> UseState Hook </h1>
        <div>
           
            State Value : {firstState}           
        </div>
        <div>
            Flag : *** {boolState ? "Hello React" : "" } *** ( toggle )
        </div>   
         <button onClick={handleStateValue}> Click to change 2 state velues</button>
         <hr /> 
        <div>
            Increment / Decrement num Ops : 
            <button onClick={increment}> + </button>
                 {steps}
            <button onClick={decrement}> - </button>     
        </div>
        <hr />
        <form onSubmit={addNames}>
           Enter names: <input value={name} placeholder="add names" onChange={(e)=>setName(e.target.value)} />
           <button>Submit</button>
        </form>
        <ul>
          {names.map((item, index) =>(  <li key={item.id}> {item.name} </li>  ))  }
        </ul>
        <hr />
        <h3>Form data with single state var, nested</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
                <h3>General Information</h3>
                <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                <input name="contactNumber" type="number" placeholder="Contact Number" onChange={handleChange} value={formData.contactNumber || ''} />
                <input name="qualification" placeholder="Qualification" onChange={handleChange} value={formData.qualification} />
                <input name="nationality" placeholder="Nationality" onChange={handleChange} value={formData.nationality} />

                <h3>Address</h3>
                <input name="street" placeholder="Street" onChange={handleAddressChange} value={formData.address.street} />
                <input name="area" placeholder="Area" onChange={handleAddressChange} value={formData.address.area} />
                <input name="city" placeholder="City" onChange={handleAddressChange} value={formData.address.city} />
                <input name="state" placeholder="State" onChange={handleAddressChange} value={formData.address.state} />
                <input name="country" placeholder="Country" onChange={handleAddressChange} value={formData.address.country} />
                <input name="pincode" type="number" placeholder="Pincode" onChange={handleAddressChange} value={formData.address.pincode || ''} />

                <button type="submit">Submit</button>
           </form>
        
    </>
)

}

export default UseStateComponent;