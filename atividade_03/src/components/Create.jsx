import React, { Component} from 'react'

import axios from 'axios'


export default class Create extends Component{

    constructor(props){
        super(props)
        this.state = {nome:''}
        this.state = {curso:''}
        this.state = {capacidade:''}

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

        const novaDisciplina = {nome:this.state.nome, curso: this.state.curso, capacidade: this.state.capacidade}

        axios.post('http://localhost:3001/disciplinas', novaDisciplina)
        .then(
            (res) =>{
                console.log(res.data.id)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

        this.setState({nome:'', curso:'', capacidade:''})
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Criar Disciplina</h3>
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
                        <input type="submit" value='Criar' className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}