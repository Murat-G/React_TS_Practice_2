import GreetProps from '../components/GreetProps'

const TypingProps = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <GreetProps name="Bill"  lastName="Doe" age={29} isLoggedIn={true} />
    </div>
  )
}

export default TypingProps