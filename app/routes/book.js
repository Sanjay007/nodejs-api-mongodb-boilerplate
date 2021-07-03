const express = require("express");

const router = express.Router();
const JoiMiddleware = require("../middleware/joiSchemaValidator");
const controller = require("../controllers/book");
const validate = require("../controllers/book.validate");

// All Route registered here
router.post("/create", JoiMiddleware(validate.createBook), controller.create);
router.put("/edit", JoiMiddleware(validate.editBook), controller.edit);
router.delete(
  "/:bookId",
  JoiMiddleware(validate.deleteBookById, "params"),
  controller.delete
);
router.get(
  "/:bookId",
  JoiMiddleware(validate.readBookById, "params"),
  controller.getData
);

module.exports = router;

// Swagger doc generator for above Rout
/**
* @swagger
{
  "/book/create": {
    "post": {
      "tags": [
        "Books"
      ],
      "name": "Create New",
      "summary": "Create new Book",
      "requestBody": {
        "description": "Optional description in *Markdown*",
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/",
              "type": "object",
              "properties": {
                "bookName": {
                    "example": "Mackbeth",
                    "type": "string"
                },
                "bookAuther": {
                    "example": "William Shakespeare.",
                    "type": "string"
                },
                "bookPageCount": {
                    "example": 2000,
                    "type": "integer"
                },					
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "ok"
		},
		"400": {
          "description": "Invalid params"
        }
      }
    }
  }
}

*/

/**
* @swagger
{
  "/book/edit": {
    "put": {
      "tags": [
        "Books"
      ],
      "name": "Create New",
      "summary": "Create new Book",
      "requestBody": {
        "description": "Optional description in *Markdown*",
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/",
              "type": "object",
              "properties": {
                "bookId": {
                    "example": "56d74e8fed15cd4f5f4",
                    "type": "string"
                },
                "bookName": {
                    "example": "Mackbeth",
                    "type": "string"
                },
                "bookAuther": {
                    "example": "William Shakespeare.",
                    "type": "string"
                },
                "bookPageCount": {
                    "example": 2000,
                    "type": "integer"
                },					
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "ok"
		},
		"400": {
          "description": "Invalid params"
        }
      }
    }
  }
}

*/

/**
* @swagger
{
  "/book/{bookId}": {
    "delete": {
      "tags": [
        "Books"
      ],
      "name": "Delete Book Entry",
      "summary": "Delete Book Entry",
      "parameters": [
        {
            "in": "path",
            "name": "bookId",
            "schema": {
              "type": "string",
               "example": "5e564d5d1qe564e8fwvwv",
            },
            "required": true,
            "description": "Book id "
          },
        ],
      "responses": {
        "200": {
          "description": "OK"
		},
		"400": {
          "description": "Invalid params"
        }
      }
    }
  }
}

*/

/**
* @swagger
{
  "/book/{bookId}": {
    "get": {
      "tags": [
        "Books"
      ],
      "name": "Fetch Book data",
      "summary": "Fetch Book data",
      "parameters": [
        {
            "in": "path",
            "name": "bookId",
            "schema": {
              "type": "string",
               "example": "5e564d5d1qe564e8fwvwv",
            },
            "required": true,
            "description": "Book id "
          },
        ],
      "responses": {
        "200": {
          "description": "OK"
		},
		"400": {
          "description": "Invalid params"
        }
      }
    }
  }
}

*/
