import db from './Connection';

// Add a todo item
const addTodo = (title, description, date, dueDateAlert, isFavourite, completed) => {
    const formattedDate = date ? date.toISOString().slice(0, 10) : null;
    console.log(formattedDate);
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO todos (title, description, due_date, due_date_alert, favourite, completed) VALUES (?, ?, ?, ?, ?, ?);',
            [title, description, formattedDate, dueDateAlert, isFavourite, completed],
            (_, { insertId, rowsAffected }) => {
                console.log(`Inserted todo item with id ${insertId}`);
            },
            (_, error) => {
                console.log('Error inserting todo item:', error);
            }
        );
    });
};


// Retrieve all todo items
const getTodos = callback => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM todos;',
            [],
            (_, { rows }) => {
                callback(rows._array);
            },
            (_, error) => {
                console.log('Error getting todo items:', error);
            }
        );
    });
};

// Update a todo item
const updateTodo = (id, title, description, dueDate, dueDateAlert, favourite, completed) => {
    db.transaction(tx => {
        tx.executeSql(
            'UPDATE todos SET title=?, description=?, due_date=?, due_date_alert=?, favourite=?, completed=? WHERE id=?;',
            [title, description, dueDate, dueDateAlert, favourite, completed, id],
            (_, { rowsAffected }) => {
                console.log(`Updated ${rowsAffected} rows`);
            },
            (_, error) => {
                console.log('Error updating todo item:', error);
            }
        );
    });
};

const updateFavorite = (id, favorite) => {
    db.transaction(tx => {
        tx.executeSql(
            'UPDATE todos SET favourite=? WHERE id=?;',
            [favorite, id],
            (_, { rowsAffected }) => {
                console.log(`Updated ${rowsAffected} rows`);
            },
            (_, error) => {
                console.log('Error updating todo item:', error);
            }
        );
    });
};

const updateCompleted = (Id, completed) => {
    db.transaction(tx => {
        tx.executeSql(
            'UPDATE todos SET completed=? WHERE id=?;',
            [completed, Id],
            (_, { rowsAffected }) => {
                console.log(`Updated ${rowsAffected} rows`);
            },
            (_, error) => {
                console.log('Error updating todo item:', error);
            }
        );
    });
};

// Delete a todo item
const deleteTodo = id => {
    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM todos WHERE id=?;',
            [id],
            (_, { rowsAffected }) => {
                console.log(`Deleted ${rowsAffected} rows`);
            },
            (_, error) => {
                console.log('Error deleting todo item:', error);
            }
        );
    });
};

export { addTodo, getTodos, deleteTodo, updateTodo, updateCompleted, updateFavorite };