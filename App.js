import React ,{useEffect, useState} from 'react'
import { SafeAreaView, StatusBar, StyleSheet, FlatList } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import Nota from './src/componentes/Nota';
import { buscaNotas, criaTabela } from './src/componentes/servicos/Notas';

export default function App() { 
  const [notaSelecionada, setNotaSelecionada] = useState({});
  const [notas, setNotas] = useState([]);

  useEffect(()=>{
    criaTabela();
    mostraNotas();
  }, [])

  async function mostraNotas(){
    const todasNotas = await buscaNotas()
    console.log("todasNotas", todasNotas)
    setNotas(todasNotas)
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
      data={notas}
      renderItem={(notas)=><Nota {...notas} setNotaSelecionada={setNotaSelecionada}/>}
      keyExtractor={notas => notas.id}
    />
      <NotaEditor mostraNotas={mostraNotas} notaSelecionada={notaSelecionada}/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

