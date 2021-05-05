import './App.css';
import {connect} from 'react-redux'
import Searchbar from './components/searchbar'
import Cardsection from './components/cardsection'
import Nomineelist from './components/nominees'
import Banner from './components/banner'
function App(props) {
  return (
    <div className="App">
      <Banner/>
     <Searchbar/>
     <div className='lists'>
     <Cardsection/>
     <Nomineelist/>
     </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return(
      {

      }
  )
}
export default connect(mapStateToProps, {})(App)