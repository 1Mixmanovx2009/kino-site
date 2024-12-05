import React, { useState } from 'react'
import { useGetMovieDiscoverQuery } from '../redux/api/movie-api'
import { useGetGenreQuery } from '../redux/api/genre-api'
import { useNavigate } from 'react-router-dom'

const Discover = () => {
    const navigate = useNavigate()
    const [selectedGenre, setSelectedGenre] = useState([])
  const {data: genres } = useGetGenreQuery()

  const {data, isError} = useGetMovieDiscoverQuery({ with_genres: selectedGenre.join(",")})
    const handleChangeGenre = id => {
        if(selectedGenre.includes(id)){
            setSelectedGenre(p => p.filter(i => i !== id))
        }else{
            setSelectedGenre(p => [...p, id])
        }
    }
  return (
    <div className='container my-[30px]'>
        <div className='flex gap-5 overflow-auto p-3'>
            {
                genres?.genres?.map(genre => (
                    <button 
                        onClick={()=> handleChangeGenre(genre.id)} 
                        className={`whitespace-nowrap rounded-md px-2 bg-black text-redText ${selectedGenre.includes(genre.id)? "bg-red-500 text-white ": ""}`} 
                        key={genre.id}>{genre.name}</button>
                ))
            }
        </div>
        <div className="flex items-center justify-center flex-wrap gap-[10px] mt-[50px] ">
            {
                data?.results?.map(movie=> (
                    <div className='w-[300px]' key={movie.id}>
                        <img onClick={()=> navigate(`/movie/${movie.id}`)} src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} className='w-full cursor-pointer' alt="" />
                        <h3 className='text-white mt-[5px]'>{movie.title}</h3>
                        <p className='text-white'>{movie.vote_average}</p>
                    </div>
                ))
            }
        </div>
            {
                !data?.total_results && <div><h2 className='text-center mt-11'>Movie not found</h2></div>
            }
    </div>
  )
}

export default Discover