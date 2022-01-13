package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dtos.MovieDto;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Transactional(readOnly = true)
    public Page<MovieDto> findAll(Pageable pageable){
        Page<Movie> result = movieRepository.findAll(pageable);
        Page<MovieDto> page = result.map(MovieDto::new);

        return page;

    }

    @Transactional(readOnly = true)
    public MovieDto findById(Long id){
        Movie result = movieRepository.findById(id).get();
        return new MovieDto(result);
    }
}
