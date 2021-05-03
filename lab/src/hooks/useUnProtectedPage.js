import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToFeed, goToLogin } from '../routes/coordinator'

const useUnProtectedPage = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToFeed(history)
    }
  }, [history])
}

export default useUnProtectedPage