import React, { useEffect, useState } from "react";

import CoinItem from "./CoinItem";
import axios from "axios";
import { toast } from "react-toastify";

const CoinSearch = () => {

    const [searchText, setSearchText] = useState('');
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);

    
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&locale=en`

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data)
    })
  },[url])

  const goNext = () =>  {
    setPage(page+1)
  }
  const goPrev = () => {
    if(page > 1){
      setPage(page-1)
    }
    else{
      toast.error("cannot go backward than this page.")
    }
  }
 
  return (
    <div className="rounded-div my-4 font-poppins">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 md:ml-[28px] lg:ml-[75px]">Search Crypto</h1>
        <form>
          <input onChange={(e)=>setSearchText(e.target.value)} className=" w-full md:w-[500px] lg:w-[670px] text-center outline-none bg-primary border border-input px-4 py-2 rounded-full shadow-xl " type="text" placeholder="Search a coin" />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4 ">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.filter((value)=>{
            if(searchText === ''){
                return value
            }else if(
                value.name.toLowerCase().includes(searchText.toLowerCase())
            ){
                return value
            }
          }).map((coin) => (
              <CoinItem key={coin.id} coin={coin}/>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center">
        <button onClick={goPrev} className="bg-button text-btnText px-4 p-2 text-center m-2 rounded-full shadow-xl hover:shadow-2xl">Previous</button>
        <button onClick={goNext} className="bg-button text-btnText px-4 p-2 text-center m-2 rounded-full shadow-xl hover:shadow-2xl">Next</button>
      </div>
    </div>
  );
};

export default CoinSearch;
