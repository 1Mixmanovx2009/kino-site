import { FaStar } from "react-icons/fa6"
import { useGetMovieQuery } from "../redux/api/movie-api"
import Pagination from '@mui/material/Pagination';
import {MOVIE_LISTS} from "../static"
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PopularMovies = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(+searchParams.get("count") || 1);
    const [type, setType] = useState(searchParams.get("path") || "now_playing")
    const {data} = useGetMovieQuery({type, params: {page}})
    useEffect(()=>{
        if(!searchParams.get("path")){
            setType("now_playing")
        }
       }, [searchParams.get("path")])
       
       const handleChange = (event, value) => {
            setPage(value);
            const params = new URLSearchParams(searchParams);
            params.set("count", value)
            setSearchParams(params)
        };
    
        const handleChangeType = (path)=>{
            setType(path)
            setPage(1)
            setSearchParams({path, count: 1})
        }
  return (
    <div className="container mb-[20px]">
        <div className="flex gap-5 justify-center">
            {MOVIE_LISTS?.map(item => (
                <button onClick={() => handleChangeType(item.path)} key={item.id} className="mb-[20px] text-white bg-redText rounded-2xl p-[5px]" >{item.title}</button>
            ))

            }
        </div>
        <div className="flex items-center justify-center flex-wrap gap-[8px] ">
            {
                data?.results?.map(movie=> (
                    <div key={movie.id}>
                        <img 
                        onClick={()=> navigate(`/movie/${movie.id}`)}
                        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} width={300} className="cursor-pointer"  alt="" />
                        <h3 className="text-center text-white font-[500] text-[16px] leading-[20px] mb-[10px] mt-[10px]">{movie.title}</h3>
                        <div className="flex items-center gap-[8px] justify-center mb-[10px]">
                            <FaStar className='text-yellow-500'/>
                            <p className="text-white font-[500] text-[16px] leading-[20px] mr-[20px]">{movie.vote_average}</p>
                            <p className="text-center text-white font-[500] text-[16px] leading-[20px]">{movie.release_date}</p>
                        </div>
                    </div>
                ))
            }
            <div className="flex justify-center  my-[20px]">
                <Pagination count={data?.total_pages} page={page} onChange={handleChange} className="bg-white rounded-xl"/>
            </div>

        </div>
    </div>
  )
}

export default PopularMovies