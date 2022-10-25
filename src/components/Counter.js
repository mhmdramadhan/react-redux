import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import { counterActions } from '../store/counter'
import classes from './Counter.module.css';

// menggunakan fungsional
const Counter = () => {
  const dispatch = useDispatch();

  // fungsi dieksekusi oleh react redux
  // karna di index.js nya dibungkus redux jadi kita bisa manggil data store redux di store/index.js
  const counter = useSelector(state => state.counter.counter);
  // console.log(counter)
  const show = useSelector(state => state.counter.showCounter);
    // console.log(show)

  // mengkonekan fungsi yang ada di store/index.js 
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase({amount: 5}))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// menggunakan class
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }

// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
