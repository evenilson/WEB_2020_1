import React, { Component} from 'react'


import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

import {useFormik} from 'formik'

const CreatePage = () => (
    <FirebaseContext.Consumer>
        {
            contexto => <Create firebase={contexto}/>
        }
    </FirebaseContext.Consumer>
)

const formik = useFormik(
    {
        initialValues:{
            nome:''

        },
        onSubmit: values => {
            console.log(values.nome)
        }
    }
)

class Create extends Component{

    constructor(props){
        super(props)
        this.state = {nome:'', curso:'',capacidade:''}

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

    onSubmit(e){
        e.preventDefault()

        const disciplina = 
            {
                nome: this.state.nome,
                curso: this.state.curso,
                capacidade: this.state.capacidade
            }
        

        FirebaseService.create(
            this.props.firebase.getFirestore(),
            (mensagem)=>{
                if(mensagem === 'ok'){
                    console.log(`Diciplina ${this.state.nome} inserido com sucesso`)
                }
            },
            disciplina
        )
        
        this.setState({nome:'', curso:'', capacidade:''})
    }

   




    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Criar Disciplina</h3>
                <form onSubmit={this.onSubmit, formik.handleSubmit}>
                    <div className='form-goup'>
                        <label>Nome: </label>
                        <input 
                            type="text" 
                            className='form-control' 
                            value={this.state.nome} 
                            onChange={this.setNome, formik.handleChange}/>
                    </div>
                    <div className='form-goup'>
                        <label>Curso: </label>
                        <input 
                            type="text" 
                            className='form-control' 
                            value={this.state.curso} 
                            onChange={this.setCurso}/>
                    </div>
                    <div className='form-goup'>
                        <label>Capacidade: </label>
                        <input 
                            type="text" 
                            className='form-control' 
                            value={this.state.capacidade} 
                            onChange={this.setCapacidade}/>
                    </div>
                    <div className='form-goup'>
                        <input 
                            type="submit" 
                            value='Criar' 
                            className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePage