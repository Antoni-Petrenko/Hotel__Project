import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
export default class Services extends Component {
    state={
        services:[
            {icon:<FaCocktail/>,title:'free coctails',info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus?'},
            {icon:<FaHiking/>,title:'Endless Hiking',info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus?'},
            {icon:<FaShuttleVan/>,title:'Free shuttle',info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus?'},
            {icon:<FaBeer/>,title:'Strongest Beer',info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus?'}
        ]
    }
  render() {
    return (
      <section className='services'>
        <Title title='srvices'/>
        <div className="services-center">
            {this.state.services.map((elem,index)=>{
                return(
                   <article key={index} className="service">
                         <span>{elem.icon}</span>
                        <h6>{elem.title}</h6>
                <p>{elem.info}</p>
                   </article>
                )
            })}
        </div>

      </section>
    )
  }
}
