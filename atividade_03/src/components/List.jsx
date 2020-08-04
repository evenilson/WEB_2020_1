import React, { Component} from 'react'
import Axios from 'axios'
import TableRow from './TableRow'

export default class List extends Component{

    constructor(props){
        super(props)
        this.state = {disciplinas: []}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount(){
        Axios.get('http://localhost:3001/disciplinas')
        .then(
            (res) =>{
                this.setState({disciplinas: res.data})
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    montarTabala(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) =>{
                return <TableRow disciplina={disciplina} key={i}
                         apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id){
        let tempDisciplina = this.state.disciplinas
        for(let i=0; i<tempDisciplina.length; i++){
            if(tempDisciplina[i].id === id){
                tempDisciplina.splice(i,1)
            }
        }
        this.setState({disciplinas: tempDisciplina})
    }

    render(){
        return(
            <div>
                <h3>Lista de Disciplinas</h3>
                <table className='table table-striped' style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan='2' style={{textAlign:'center'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabala()}
                    </tbody>
                </table>
            </div>
        )
    }
}