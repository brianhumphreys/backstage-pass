import React, { Fragment, useEffect } from "react";
import renderInitiativeCards from "./helpers";

const InitiativeCards = () => {
  useEffect(() => {
    renderInitiativeCards();
  }, []);
  return (
    <Fragment>
      {/*<h1 className="title">Hover over the cards</h1>*/}
      {/*<div id="app" className="container">*/}
      <card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
        <h1 slot="header">Canyons</h1>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </card>
      {/*<card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">*/}
      {/*  <h1 slot="header">Beaches</h1>*/}
      {/*  <p slot="content">*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
      {/*  </p>*/}
      {/*</card>*/}
      {/*<card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">*/}
      {/*  <h1 slot="header">Trees</h1>*/}
      {/*  <p slot="content">*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
      {/*  </p>*/}
      {/*</card>*/}
      {/*<card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">*/}
      {/*  <h1 slot="header">Lakes</h1>*/}
      {/*  <p slot="content">*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
      {/*  </p>*/}
      {/*</card>*/}
      {/*</div>*/}
    </Fragment>
  );
};

export default InitiativeCards;
