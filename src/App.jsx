
import { Outlet } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import { Provider } from 'react-redux';
import {store} from './redux/features/store'
import { AuthProvide } from "./context/AuthContext";


function App() {


  return (
    <>
      <Provider store={store}>
        <AuthProvide>
          <Header />
          <main className="min-h-screen max-w-screen-2xl mx-auto px-16 py-12">
            <Outlet />
          </main>
          <Footer />
        </AuthProvide>
      </Provider>

    </>
  )
}

export default App
