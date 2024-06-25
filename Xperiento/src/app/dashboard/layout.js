import { cookiesKey } from '@/utils/temp_tokenKey'
import { authenticationClientMiddleware } from '@/utils/token'
import { cookies } from 'next/headers';

const DashboardLayout = ({children}) => {
  const cookieStore = cookies()
  const tokenValue = cookieStore.get(cookiesKey)?.value
 const auth = authenticationClientMiddleware(tokenValue)
if(!auth){
    return <h1>Protected Route</h1>
}

  return (
  <>
        {children}</>
  )
}

export default DashboardLayout