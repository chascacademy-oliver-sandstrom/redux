import React from 'react';
import { buyCookie } from '../redux';
import { connect } from 'react-redux';

function cookieContainer(props) {
    return (
        <div>
            <h2>Number of cookies - { props.numOfCookies }</h2>
            <button onClick={props.buyCookie}>Buy cookies</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCookies: state.cookie.numOfCookies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCookie: () => dispatch(buyCookie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cookieContainer)