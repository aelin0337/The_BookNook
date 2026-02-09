import Book from "../models/Book.js";
import mongoose from "mongoose"; 
import fs from "fs";
import path from "path";

// Getting all books
export const getAllBooks = async (req, res) => {
  try {
    const { genre } = req.query;

    const filter = {};
    if (genre) {
      filter.genreId = genre;
    }

    const books = await Book.find(filter);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Geting all books by ID
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Books not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error receiving books", error: error.message });
  }
};

// POST /books
export const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error adding books", error: error.message });
  }
};
// PUT /books/:id
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Error updating books", error: error.message });
  }
};
// DELETE /books/:id
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting books", error: error.message });
  }
};
