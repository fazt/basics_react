function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return(
    <div>
      <Welcome name="Fabian"/>
      <Welcome name="Jesus"/>
      <Welcome name="Ryan"/>
    </div>
  )
}

render(
    <App/>
  , document.getElementById('app')
);
