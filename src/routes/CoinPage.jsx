import axios from "axios";
import React, { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaGithub, FaReddit } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import p1 from '../assests/ethereum.webp'

const CoinPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((response) => {
      setCoin(response.data);
      // console.log(response.data);
      setLoading(false);
    });
  }, [url]);

  return (
    <>
    {loading ? (
      <div className="rounded-div flex items-center justify-center">
        <img src={p1} alt="" className='animate-spin'/>
      </div>
    ): (
    <div className="rounded-div my-12 py-8 font-poppins">

      <div className="flex py-8 ">
        <img className="w-20 mr-8" src={coin.image?.large} alt="/" />
        <div className="">
          <p className="text-3xl font-bold ">{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / INR)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="">
          <div className="flex justify-between">
            {coin.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                {" "}
                ₹{coin.market_data.current_price.inr.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div className="">
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4 ">
            <div className="">
              <p className="text-gry-500 text-sm">Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>₹{coin.market_data.market_cap.inr.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="">
              <p className="text-gry-500 text-sm">Volumn (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>₹{coin.market_data.total_volume.inr.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div className="text-gray-500 text-sm">
              <p>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>₹{coin.market_data.high_24h.inr.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>₹{coin.market_data.low_24h.inr.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div className="">
              <p className="text-gray-500 text-sm">Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div className="">
              <p className="text-gray-500 text-sm">Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm ">Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4 ">
            <div className="">
              <p className="text-gray-500 text-sm">Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-around  p-8 text-accent text-2xl">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-4 ">
        <p className="text-xl font-bold">About {coin.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
    )}

    </>
  );
};

export default CoinPage;
