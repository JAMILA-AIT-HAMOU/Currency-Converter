import { useState, useMemo, useEffect } from 'react'
import './App.css'

function App() {
  return(
    <CurrencyConverter />
  )
}
export function CurrencyConverter() {
    const [amount, setAmount]=useState(1)
    const [startCurrency, setStartCurrency]=useState("MAD")
    const [targetCurrency, setTargetCurrency]=useState("USD")
    const [shine, setShine]=useState(false)



    const rates = {
      USD: 1,
      EUR: 0.92,
      GBP: 0.78,
      JPY: 156.7,
      MAD:9.95

    };

    

    

   
    const baseAmount =useMemo(()=>{
      if(amount<=0) return 0

      return amount / rates[startCurrency]

    },[amount, startCurrency])


    const result= baseAmount * rates[targetCurrency]



    useEffect(()=>{
        setShine(true)
        const timer= setTimeout(()=>setShine(false), 1000)
        return ()=>clearTimeout(timer)
      
    },[result])
   




    return (
      <section>
        <h1>Currency Converter</h1>
        <form><label>Enter a Number:
          <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
        </label>
        <label>Start Currency:
          <select value={startCurrency} onChange={(e)=>setStartCurrency(e.target.value)}>
            <option value="MAD">MAD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
        
        <label>Target Currency:
          <select value={targetCurrency} onChange={(e)=>setTargetCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="MAD">MAD</option>
          </select>
        </label>
        
          <p className="pop">Converted Amount:<span className={`pop ${shine ? "shine":""}`}> {result.toFixed(2)} {targetCurrency}</span></p>
    
      </form>


      </section>
    )

}


export default App
