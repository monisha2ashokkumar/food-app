import { Fragment } from "react";
import MealsStaticSummary from "./MealsStaticSummary";
import AvailableItems from './AvailableItems'

export default function Meals(props){

    return (
        <Fragment>
            <MealsStaticSummary/>
            <AvailableItems/>
        </Fragment>
    )
    
}