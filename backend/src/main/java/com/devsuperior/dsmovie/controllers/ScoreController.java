package com.devsuperior.dsmovie.controllers;


import com.devsuperior.dsmovie.dtos.MovieDto;
import com.devsuperior.dsmovie.dtos.ScoreDto;
import com.devsuperior.dsmovie.services.ScoreService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    private final ScoreService service;

    public ScoreController(ScoreService service) {
        this.service = service;
    }

    @PutMapping
    public MovieDto saveScore(@RequestBody ScoreDto dto){

        MovieDto movieDto = service.saveScore(dto);
        return movieDto;
    }
}
