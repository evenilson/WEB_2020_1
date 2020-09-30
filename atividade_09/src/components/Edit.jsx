import React, { Component} from 'react'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = (props) => (
    <FirebaseContext.Consumer>
        {
            contexto => <Edit firebase={contexto} id={props.match.params.id}/>
        }
    </FirebaseContext.Consumer>
)

 class Edit extends Component{

    constructor(props){
        super(props)
        this.state = {nome:'', curso:'', capacidade:''}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }
    setCurso(e){
        this.setState({curso:e.target.value})
    }
    setCapacidade(e){
        this.setState({capacidade:e.target.value})
    }

    componentDidMount(){

        FirebaseService.retrieve(
            this.props.firebase.getFirestore(),
            (disciplina) =>{
                if(disciplina){
                    this.setState(
                        {
                            nome:disciplina.nome,
                            curso:disciplina.curso,
                            capacidade:disciplina.capacidade
                        }
                    )  
                }
            },
            this.props.id
        )
    }

    onSubmit(e){
        e.preventDefault()

        const disciplina = 
        {
            nome: this.state.nome,
            curso: this.state.curso,
            capacidade: this.state.capacidade
        }

        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem) => {
                if(mensagem === 'ok'){
                    console.log('Diciplina atualizado com sucesso')
                }
            },
            disciplina,
            this.props.id
        )

        this.setState({nome:'', curso:'', capacidade:''})

    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Editar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-goup'>
                        <label>Nome: </label>
                        <input type="text" className='form-control' value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className='form-goup'>
                        <label>Curso: </label>
                        <input type="text" className='form-control' value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className='form-goup'>
                        <label>Capacidade: </label>
                        <input type="text" className='form-control' value={this.state.capacidade} onChange={this.setCapacidade}/>
                    </div>
                    <div className='form-goup'>
                        <input type="submit" value='Salvar' className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPage