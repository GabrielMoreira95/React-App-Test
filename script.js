class TitleField extends React.Component {

  render() {
    return (
<h1>hello world</h1>
)
  }
}
  
ReactDOM.render(
  React.createElement(TitleField, {name: 'Gabriel'} ), 
  document.getElementById('title')
)
ReactDOM.render(
  React.createElement(TitleField, {name: 'Matheus'} ), 
  document.getElementById('title')
)