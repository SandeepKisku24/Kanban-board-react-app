import React ,{useState} from 'react';
import Quicksell from './quicksell';
import Header from './Header';


function App() {
    const[byStatus,stat]  =useState(true);
    const[opt,optchange]  =useState(false);
    const[byPriority,statprio]  =useState(false);
    const[byUser,statuser]  =useState(false);
    const[bysortprio,sortprio]  =useState(false);
    function statusclicked(){
    stat(true);
    statuser(false);
    statprio(false); 
    sortprio(false) 
    }
    function prioclicked(){
    stat(false);
    statuser(false);
    statprio(true);
    sortprio(false) 
    }
    function userclicked(){
    stat(false);
    statuser(true);
    statprio(false);
    sortprio(false) 
    }
    function sortbyprio(){
    stat(false);
    statuser(false);
    statprio(false);
    sortprio(true) 
    }
    function showopt(){
      optchange(true);
    }
    function hideopt(){
      optchange(false);
    }
    function Options(){
      return(
          <div className="">
              <button className='option-button' onClick={showopt}>Display</button>
              {opt?<ShowOptions/>:null}
              <Quicksell className="detail" status1 ={byStatus} priority1 ={byPriority} user1 ={byUser} />
          </div>
      )
    }
    const [selectedOption, setSelectedOption] = useState('');

    // Function to be called for each option
    const handleOptionSelect = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
      if(selectedValue==="option1") statusclicked();
      else if(selectedValue==="option2") prioclicked();
      else if(selectedValue==="option3") userclicked();
    };
    function ShowOptions(){
      return(
        <div className="options" onMouseLeave={hideopt}>
          <div className="left-side">
                  <div><p>Grouping</p></div>
                  <div className='options_style'><select value={selectedOption} onChange={handleOptionSelect}>
                    <option value ="option1">Status</option>
                    <option value ="option2">Priority</option>
                    <option value ="option3">Users</option>
                  
                  </select>
                  </div>
                  
              </div>
              <hr/>
              <div className="left-side">
              <div ><p>Odering</p></div>
              <div>
              <button onClick={sortbyprio}>Priority</button>
              </div>
              </div>
              
        </div>
      )
    }

  return (
    <div className="App">
      <Header/>
      <Options className="field" />
      {/* <Quicksell/> */}
    </div>
  );
}
export default App;
