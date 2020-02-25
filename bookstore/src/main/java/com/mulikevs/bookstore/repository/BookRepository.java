package com.mulikevs.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mulikevs.bookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
