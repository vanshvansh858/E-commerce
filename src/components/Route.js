 
import useNavigation from '../hooks/use-navigation'

const Route = ({ path, children }) => {

    const {currentPath} = useNavigation()  
    if(currentPath === path)
    {
        return children
    }
}

export default Route