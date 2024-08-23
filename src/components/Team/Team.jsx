

const Team = () => {

// Btn click
  const handleBtnClick = (event) => {
    event.target.previousElementSibling.style.backgroundColor = "green";
  }


  // Mouse hover function
const handleMouseHover = (event) => {
  event.target.style.backgroundColor = "red";
}

  return (
    <>
      <h2 onMouseEnter={(e) => handleMouseHover(e)}>Our Team</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam
        earum veniam. Culpa, minus soluta, provident dolorem velit expedita
        dignissimos omnis harum nesciunt nam id ipsum temporibus fugit saepe.
        Natus.
      </p>
      <button onClick={(event) => handleBtnClick(event)}>Click</button>
    </>
  );
}

export default Team