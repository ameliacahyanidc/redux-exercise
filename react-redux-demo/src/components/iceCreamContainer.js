import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamConatiner(props) {
    return (
        <div>
            <h2>Number of ice creams - {props.numberOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream //Receive numberofcakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
) (IceCreamConatiner)


