import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchStart,fetchEnd, fetchError } from '../../../store/slices/statusSlice'

const HomePage = () => {
  const status = useSelector(state=>state.status)
  console.log('status', status)
  const dispatch = useDispatch(
  )
  return (
    <>
    {
      status.loading ? <h1>Loading .... </h1> : <h1>Home Page</h1>
    }
    {
      !!status.error && <h6 style={{'color':'red'}}>{status.error}</h6>
    }
    <button onClick={()=>dispatch(fetchStart())}>fetch Start</button>
    <button onClick={()=>dispatch(fetchEnd())}>fetch End</button>
    <button onClick={()=>{
      dispatch(fetchError("ERROR"))
      setTimeout(() => {
        dispatch(fetchError(""))
    }, 3000)
    }}>fetch Error</button>

    </>
  )
}

export default HomePage