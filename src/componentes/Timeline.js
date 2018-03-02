import React, { Component } from 'react';
import FotoItem from './FotoItem';
import { connect } from 'react-redux';
import TimelineService from '../services/TimelineService';

class Timeline extends Component {

    constructor(props){
      super(props);      
      this.login = this.props.login;      
    }

    carregaFotos(){  
      let urlPerfil;

      if(this.login === undefined) {
        urlPerfil = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
      } else {
        urlPerfil = `http://localhost:8080/api/public/fotos/${this.login}`;
      } 

      this.props.lista(urlPerfil);                  
    }

    componentDidMount(){
      this.carregaFotos();
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.login !== this.login){          
        this.login = nextProps.login;
        this.carregaFotos();
      }
    }

    render(){
        console.log("render");
        return (
        <div className="fotos container">
          {
            this.props.fotos.map(foto => <FotoItem key={foto.id} foto={foto} like={this.props.like} comenta={this.props.comenta}/>)
          }                  
        </div>            
        );
    }
}

const mapStateToProps = state => {
  return {fotos : state.timeline}
};

const mapDispatchToProps = dispatch => {
  return {
    like : (fotoId) => {
      dispatch(TimelineService.like(fotoId));
    },
    comenta : (fotoId,textoComentario) => {
      dispatch(TimelineService.comenta(fotoId,textoComentario))
    },
    lista : (urlPerfil) => {
      dispatch(TimelineService.lista(urlPerfil));      
    }

  }
}

const TimelineContainer = connect(mapStateToProps,mapDispatchToProps)(Timeline);

export default TimelineContainer