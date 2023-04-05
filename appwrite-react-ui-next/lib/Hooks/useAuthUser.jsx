import { useState , useEffect} from "react";

const useAuthUser = (account) =>{
    const [user, setUser] = useState({name: false, email: false, emailVerification: false, phone: false, phoneVerification: false})
    const [loading, setLoading] = useState(true)
    const [Refresh, setRefresh] = useState(false)
    useEffect(() => {
      const promise = account.get();
      promise.then(function (response) {
        setUser(response)
        setLoading(false)
    }, function (error) {
        setLoading(false)
    });
    }, [Refresh])
    return {user, loading, Refresh, setRefresh, setLoading};
}

export default useAuthUser