function WelcomeMessage(props) 
{
    return(
       <div>
           <p>{props.msg}</p>
           <p>{props.children}</p>
       </div>
    ); 
}

export default WelcomeMessage;