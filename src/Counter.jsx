import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,countWithNum } from './redux/counterSlice';

function Counter() {
  const count=useSelector((state)=>state.counterReducer.counter)
  console.log(count);
  const dispatch=useDispatch()
  const [num,setNum]=useState(0)
  
  return (
   <>
   <div className='d-flex align-items-center justify-content-center' style={{height:'80vh'}}>
    <div className='w-75 border border-2 border-light p-5'>
    <h1 className='text-center text-bolder text-danger'>Counter</h1>
    <h2 className='text-center text-dark'>{count}</h2>
    <div className='d-flex justify-content-center'>
        <button className='btn btn-success me-3' onClick={()=>{dispatch(increment())}}>+ Increment</button>
        <button className='btn btn-danger me-3' onClick={()=>{dispatch(decrement())}}>- Decrement</button>
        <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
    <div className='my-3 d-flex justify-content-around'>
      <input type="number" className='form-control' onChange={(e)=>{setNum(e.target.value)}} placeholder='Enter Number'/>
      <button className='btn btn-primary' onClick={()=>{dispatch(countWithNum(num))}}>Count</button>
    </div>

    </div>
    

   </div>
   
   </>
  )
}

export default Counter
