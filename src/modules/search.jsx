
export default function Search(){
  function handleClick(){
    alert("Hiciste un click");
  }
  return (
     <div className="search-container">
       <div className="search-logo-container">
         <span onClick={handleClick} className="search-logo"></span>
       </div>
       <input input={handleClick} className="search" type="search" placeholder="Search" maxlength="8" />
    </div>
  );
}
