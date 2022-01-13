import MovieCard from "componentes/MovieCard";
import Pagination from "componentes/Pagination";

function Listing() {
    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">

                    {(() => {
                        const options = [];

                        for (let i = 0; i < 10; i++) {
                            options.push(
                            <div className="col-sm-6 col-lg-4 colg-xl-3 mb-3">
                                <MovieCard />

                            </div>)
                        }

                        return options;
                    })()}

                </div>
            </div>
        </>

    );
}

export default Listing;