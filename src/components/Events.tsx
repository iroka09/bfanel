"use client"

import {useEffect} from "react"

export default function(){
  useEffect(()=>{
    window.eruda?.init()
  },[])
}