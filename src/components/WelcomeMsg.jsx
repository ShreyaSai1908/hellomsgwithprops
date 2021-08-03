function WelcomeMessage(props) 
{
    return(
       <div>
           <p>{props.msgtext}</p>
           <p>{props.children}</p>
       </div>
    ); 
}

export default WelcomeMessage;