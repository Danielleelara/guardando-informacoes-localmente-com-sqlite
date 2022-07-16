import * as SQLite from 'expo-sqlite';


function abreConexao() {
  const dataBase = SQLite.openDatabase("db.db");
  return dataBase;  
}

export const db = abreConexao();