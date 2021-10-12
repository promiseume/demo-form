import Nav from './component/nav/nav'
import Form from './component/form/form'
import Input from './component/input/input'
import Secform from './component/secform/secform'
import Lastform from './component/lastform/lastform'

function App() {
  return (
    <div >
      <Nav/>
      <div className='sections'>
      <Form/>
      <Input/>
      <Secform/>
      <Lastform/>
      </div>
    </div>
  );
}

export default App;
