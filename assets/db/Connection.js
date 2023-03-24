import * as SQLite from 'expo-sqlite';

// Open the database (or create it if it doesn't exist)
const db = SQLite.openDatabase('todos.db');

// Create the table
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, due_date DATE, due_date_alert BOOLEAN, favourite BOOLEAN, completed BOOLEAN);'
  );
});

export default db;