import React from 'react';
import './index.css';
import Iverson from './Iverson';
import LandingPage from './LandingPage';
import { WindMillLoading } from 'react-loadingg';

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

const getUser = () => sleep(3000).
//then(() => ({username: 'elmo'}))
then(() => null)

const AuthContext = React.createContext()

function AuthProvider({ children }){
    
    const [state, setState] = React.useState({
        status: 'pending',
        error: null,
        user: null,
    })
    React.useEffect(() => {
        getUser().then(
            user => setState({ status: 'success', error: null, user }),
            error => setState({ status: 'error', error, user: null }),
        )
    }, [])

    return(
        <AuthContext.Provider value = { state }>
            { state.status === 'pending' ? (
                <WindMillLoading />
            ) : state.status === 'error' ? (
            <div>
                Oh no
                <div>
                    <pre>{state.error.message}</pre>
                </div>
            </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    )
}

function useAuthState() {
    const state = React.useContext(AuthContext)
    const isPending = state.status === 'pending'
    const isError = state.status === 'error'
    const isSuccess = state.status === 'success'
    const isAuthenticated = state.user && isSuccess
    return {
        ...state,
        isPending,
        isError,
        isSuccess,
        isAuthenticated,
    }
}

function Home(){
    const { user } = useAuthState();
    return user ? <Iverson /> : <LandingPage />
}

function App(){
    return(
        <AuthProvider>
            <Home />
        </AuthProvider>
    )
}

export default App;