import { Route, Routes } from 'react-router-dom';
import Home from './Comp/Home/Home';
import About from './Comp/About/About';
import Subject from './Comp/Subject/Subject';
import Serviece from './Comp/Serviece/Serviece';
import ScrollTop from './Comp/ScrollTop';
import Blogs from './Comp/Blogs/Blogs';
import Contactu from './Comp/Contactu/Contactu';
import Personal from './Comp/Personal/Personal';
import LayOut from './Comp/LayOut';
import Password from './Comp/Personal/Password';
import Profile from './Comp/Personal/Profile';
import Cash from './Comp/Cash/Cash';
import Login from './Auth/Login';
import Auth from './Auth/Auth';
import Signup from './Auth/Signup';
import Error from './Comp/Error';

function App() {


  return (
    <div className="App">
      <ScrollTop />
      <Routes>

        <Route path='/'
          element={<LayOut />}
          children={
            <>
              <Route index element={<Home />} ></Route>
              <Route path='/about' element={<About />} />
              <Route path='/subject' element={<Subject />} />
              <Route path='/service' element={<Serviece />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/Contactus' element={<Contactu />} />
              <Route path='/person'
                element={<Personal />}
                children={
                  <>
                    <Route path='password' element={<Password />} />
                    <Route path='profile' element={<Profile />} />
                  </>
                }
              />
              <Route path='/Auth'
                element={<Auth />}
                children={
                  <>
                    <Route index element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                  </>
                }
              />
              <Route path='/cash' element={<Cash />} />
              <Route path='*' element={<Error />} />
            </>
          }


        />




      </Routes>



    </div >
  );
}

export default App;
