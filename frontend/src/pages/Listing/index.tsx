import axios from "axios";
import MovieCard from "componentes/MovieCard";
import Pagination from "componentes/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {


    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPAge] = useState<MoviePage>({

        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true

    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=score,desc`)
            .then(response => {
                const data = response.data as MoviePage;
                setPAge(data);
            });

    }, [pageNumber]);


    const handlePAgeChange = (newPageNumber : number) =>{
        setPageNumber(newPageNumber)
    }

    return (
        <>
            <Pagination page ={page} onChange={handlePAgeChange}/>
            <div className="container">
                <div className="row">

                    {page.content.map(movie => (
                        <div key={movie.id}className="col-sm-6 col-lg-4 colg-xl-3 mb-3">
                            <MovieCard movie={movie} />

                        </div>
                    )
                    )}
                </div>
            </div>
        </>

    );
}

export default Listing;