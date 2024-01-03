// index.js

const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./database");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint for student registration
app.post("/create", async (req, res) => {
  const { name, age, gender } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO students (name, age, gender) VALUES ($1, $2, $3) RETURNING *",
      [name, age, gender]
    );
    // console.log(result);
    res.json({ message: "Created successfully", data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to get all students
app.get("/students", async (req, res) => {
  try {
    // const result = await pool.query("SELECT * FROM students");
    const result = await pool.query("SELECT * FROM students ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint to get a student by ID
app.get("/students/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const result = await pool.query("SELECT * FROM students WHERE id = $1", [
      studentId,
    ]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint for updating student information
app.put("/update/:id", async (req, res) => {
  const studentId = req.params.id;
  const { name, age, gender } = req.body;

  try {
    const updateFields = {};
    if (name !== undefined) updateFields.name = name;
    if (age !== undefined) updateFields.age = age;
    if (gender !== undefined) updateFields.gender = gender;

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({ message: "No fields to update" });
    }

    const query = {
      text: `UPDATE students SET ${Object.keys(updateFields)
        .map((key, index) => `${key} = $${index + 1}`)
        .join(", ")} WHERE id = $${
        Object.keys(updateFields).length + 1
      } RETURNING *`,
      values: [...Object.values(updateFields), studentId],
    };

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No matching student found for the given ID" });
    }

    res.json({ message: "Update successfully", data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoint for deleting a student
app.delete("/delete/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const result = await pool.query(
      "DELETE FROM students WHERE id = $1 RETURNING *",
      [studentId]
    );
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No matching student found for the given ID" });
    }
    res.json({ message: "Delete successfully", data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
