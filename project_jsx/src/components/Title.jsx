import Description from './Description';

function Title(props) {
  console.log(props);
  return (
    <>
      <h1>{props.text}</h1>
      <Description description={props.description} />
    </>
  )
}

export default Title