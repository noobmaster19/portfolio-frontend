import {NAV_ITEMS} from '../config/navBar'
// Gets the adjacent routes in a circular manner
// returns them in an array
export default function getAdjacentRoutes(currentRoute) {
    const routeIndex = NAV_ITEMS.findIndex((o,i) => {
            if (o.href == currentRoute) {
                return true;
            }
    })
    const nextRoute = NAV_ITEMS[(routeIndex+1)%(NAV_ITEMS.length)]
    const prevRoute = NAV_ITEMS[(routeIndex-1) < 0? NAV_ITEMS.length-1 : routeIndex-1]
    return [prevRoute,nextRoute]
}
