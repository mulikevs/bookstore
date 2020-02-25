package com.mulikevs.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mulikevs.bookstore.entity.BookCategory;


public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
