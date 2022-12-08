import PersonList from '../components/PersonList'

const data = [
    {
        first: 'johny',
        last: 'doe'
    },
    {
        first: 'jane',
        last: 'doe'
    },
    {
        first: 'jully',
        last: 'doe'
    },
    {
        first: 'jackie',
        last: 'doe'     
    },
]

const Person = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
     <PersonList names={data} />
    </div>
  )
}

export default Person